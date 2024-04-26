import { AboutPage } from 'pages/AboutPage'
import ArticleDetailsPage from 'pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage'
import ArticlesPage from 'pages/ArticlesPage/ui/ArticlesPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { RouteProps } from 'react-router-dom'

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRouters {
  HOME = 'home',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  // last
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRouters, string> = {
  [AppRouters.HOME]: '/',
  [AppRouters.ABOUT]: '/about',
  [AppRouters.PROFILE]: '/profile',
  [AppRouters.ARTICLES]: '/articles',
  [AppRouters.ARTICLE_DETAILS]: '/articles/', // + :id

  // last
  [AppRouters.NOT_FOUND]: '*',
}

export const RouteConfig: Record<AppRouters, AppRouteProps> = {
  [AppRouters.HOME]: {
    path: RoutePath.home,
    element: <MainPage />,
  },
  [AppRouters.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRouters.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRouters.ARTICLE_DETAILS]: {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRouters.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true,
  },

  // last
  [AppRouters.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
}
