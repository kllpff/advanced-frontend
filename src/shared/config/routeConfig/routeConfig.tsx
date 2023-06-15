import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { RouteProps } from 'react-router-dom'

export enum AppRouters {
  HOME = 'home',
  ABOUT = 'about',
  PROFILE = 'profile',

  // last
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRouters, string> = {
  [AppRouters.HOME]: '/',
  [AppRouters.ABOUT]: '/about',
  [AppRouters.PROFILE]: '/profile',

  // last
  [AppRouters.NOT_FOUND]: '*',
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
  [AppRouters.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  },

  // last
  [AppRouters.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
}
