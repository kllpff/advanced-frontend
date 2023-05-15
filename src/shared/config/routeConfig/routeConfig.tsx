import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { RouteProps } from 'react-router-dom'

export enum AppRouters {
  HOME = 'home',
  ABOUT = 'about',
}

export const RoutePath: Record<AppRouters, string> = {
  [AppRouters.HOME]: '/',
  [AppRouters.ABOUT]: '/about',
}

export const RouteConfig: Record<AppRouters, RouteProps> = {
  [AppRouters.HOME]: {
    path: RoutePath.home,
    element: <MainPage />,
  },
  [AppRouters.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
}
