import {
  ProfileCard,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  profileActions,
  profileReducer,
} from 'entities/Profile'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getProfileReadonly } from '../../../entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

const reducers: ReducersList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useDispatch()

  const formData = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const readonly = useSelector(getProfileReadonly)

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ firstname: value || '' }))
  }, [dispatch])

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }))
  }, [dispatch])

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value || '') }))
  }, [dispatch])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }))
  }, [dispatch])

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
