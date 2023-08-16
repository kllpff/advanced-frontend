import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input } from 'shared/ui/Input/Input'
import { Loader } from 'shared/ui/Loader/Loader'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Profile } from '../../model/types/profile'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
  readonly?: boolean
  onChangeFirstname: (value?: string) => void
  onChangeLastname: (value?: string) => void
  onChangeCity: (value?: string) => void
  onChangeAge: (value?: string) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeCity,
    onChangeAge,
  } = props

  const { t } = useTranslation('profile')

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, { }, [className, cls.loading])}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('profile_error_title')}
          text={t('profile_error_text')}
          align={TextAlign.CENTER}
        />
      </div>
    )
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.data}>
        <Input
          value={data?.firstname}
          onChange={onChangeFirstname}
          placeholder={t('your_firstname')}
          className={cls.input}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          onChange={onChangeLastname}
          placeholder={t('your_lastname')}
          className={cls.input}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          onChange={onChangeAge}
          placeholder={t('your_age')}
          className={cls.input}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          onChange={onChangeCity}
          placeholder={t('your_city')}
          className={cls.input}
          readonly={readonly}
        />
      </div>
    </div>
  )
}
