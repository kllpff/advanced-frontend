import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const reducers: ReducersList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ProfileCard />
    </DynamicModuleLoader>
  )
}

export default ProfilePage
