import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { profileActions } from 'entities/Profile'
import cls from './ProfilePageHeader.module.scss'
import { getProfileReadonly } from '../../../../entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile')

  const readonly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(true))
  }, [dispatch])

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('profile_title')} />
      {readonly ? (
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.editBtn}
          onClick={onEdit}
        >
          {t('edit')}
        </Button>
      ) : (
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.editBtn}
          onClick={onCancelEdit}
        >
          {t('cancel')}
        </Button>
      )}
    </div>
  )
}
