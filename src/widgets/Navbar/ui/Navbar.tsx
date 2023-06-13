import { getUserAuthData, userActions } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const authData = useSelector(getUserAuthData)

  const [isAuthModal, setIsAuthModal] = useState(false)

  const closeModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const openModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const logout = useCallback(() => {
    dispatch(userActions.logout())
    setIsAuthModal(false)
  }, [dispatch])

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={logout}
        >
          {t('logout')}
        </Button>
        <LoginModal isOpen={isAuthModal} onClose={closeModal} />
      </div>
    )
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={openModal}
      >
        {t('login')}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={closeModal} />
      )}
    </div>
  )
}
