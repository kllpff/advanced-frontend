import { Profile } from '../../types/profile'

// eslint-disable-next-line consistent-return
export const validateProfileData = (profile: Profile) => {
  const {
    firstname, lastname, age, country,
  } = profile

  if (!firstname || !lastname) return ''

  if (!age || !Number.isInteger(age)) return ''

  if (!country) return ''
}
