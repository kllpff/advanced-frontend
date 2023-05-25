import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>
          {t('Главная')}
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  )
}
