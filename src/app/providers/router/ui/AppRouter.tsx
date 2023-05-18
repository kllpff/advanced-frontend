import { Route, Routes } from 'react-router-dom'
import { RouteConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => (
  <Routes>
    {Object.values(RouteConfig).map(({ element, path }) => (
      <Route
        key={path}
        path={path}
        element={<div className="page-wrapper">{element}</div>}
      />
    ))}
  </Routes>
)

export default AppRouter
