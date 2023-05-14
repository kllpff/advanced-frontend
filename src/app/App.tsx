import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import './styles/index.scss'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <div className="theme-block">
        <button onClick={toggleTheme}>Toggle theme</button>
      </div>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <AppRouter />
    </div>
  )
}

export default App
