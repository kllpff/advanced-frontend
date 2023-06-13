import { userActions } from 'entities/User'
import { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import './styles/index.scss'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
