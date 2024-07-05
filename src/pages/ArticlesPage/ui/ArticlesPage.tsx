import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import cls from './ArticlesPage.module.scss'
import { articlePageActions, articlePageReducer, getArticles } from '../model/slices/ArticlePageSlice'
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList'
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../model/selectors/articlesPageSelectors'

interface ArticlesPageProps {
   className?: string
}

const reduces: ReducersList = {
  articlesPage: articlePageReducer,
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('article')
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageView)

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchArticlesList())
    dispatch(articlePageActions.initState())
  })

  return (
    <DynamicModuleLoader reducers={reduces}>
      <div className={classNames(cls.articlesPage, {}, [className])}>
        <ArticleViewSelector
          view={view}
          onViewClick={onChangeView}
        />
        <ArticleList
          view={view}
          isLoading={isLoading}
          articles={articles}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
