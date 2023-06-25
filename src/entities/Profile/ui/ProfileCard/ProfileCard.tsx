import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text/Text'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile')

  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('profile_title')} />
        <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
          {t('edit')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input value={data?.firstname} placeholder={t('your_firstname')} className={cls.input} />
        <Input value={data?.lastname} placeholder={t('your_lastname')} className={cls.input} />
      </div>
    </div>
  )
}
