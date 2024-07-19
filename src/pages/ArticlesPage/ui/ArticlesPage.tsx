import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { Page } from 'shared/ui/Page/ui/Page'
import cls from './ArticlesPage.module.scss'
import {
  articlePageActions, articlePageReducer, getArticles,
} from '../model/slices/ArticlePageSlice'
import {
  getArticlesPageIsLoading, getArticlesPageView,
} from '../model/selectors/articlesPageSelectors'
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage'

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlePageReducer,
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const view = useSelector(getArticlesPageView)

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view))
  }, [dispatch])

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(initArticlesPage())
  })

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={isLoading ? undefined : onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
