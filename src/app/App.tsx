import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import './styles/index.scss'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <div className="theme-block"></div>
    </div>
  )
}

export default App
