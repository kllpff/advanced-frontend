import { getUserAuthData } from 'entities/User'
import { memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { RouteConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData)
  const routes = useMemo(() => Object.values(RouteConfig).filter((route) => {
    if (route.authOnly && !isAuth) {
      return false
    }
    return true
  }), [isAuth])

  return (
    <Routes>
      {routes.map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={<div className="page-wrapper">{element}</div>}
        />
      ))}
    </Routes>
  )
}

export default memo(AppRouter)
