import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input } from 'shared/ui/Input/Input'
import { Button } from '../../../../shared/ui/Button/Button'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input autofocus type="text" className={cls.input} placeholder={t('type_username')} />
      <Input type="text" className={cls.input} placeholder={t('type_password')} />
      <Button className={cls.loginBtn}>{t('Login')}</Button>
    </div>
  )
}
