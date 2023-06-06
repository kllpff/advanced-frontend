import { LoginModal } from 'features/AuthByUsername'
import { FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => {
  const { t } = useTranslation()

  const [isAuthModal, setIsAuthModal] = useState(false)

  const closeModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const openModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={openModal}
      >
        {t('Login')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={closeModal} />
    </div>
  )
}
