import { profileActions } from 'entities/Profile'
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData/updateProfileData'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import { getProfileReadonly } from '../../../../entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly'
import cls from './ProfilePageHeader.module.scss'

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
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
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
        <>
          <Button
            theme={ButtonTheme.OUTLINE_RED}
            className={cls.cancelBtn}
            onClick={onCancelEdit}
          >
            {t('cancel')}
          </Button>
          <Button
            theme={ButtonTheme.OUTLINE}
            className={cls.saveBtn}
            onClick={onSave}
          >
            {t('save')}
          </Button>
        </>
      )}
    </div>
  )
}
