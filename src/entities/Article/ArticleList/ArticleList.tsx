import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { Article, ArticleView } from '../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

export const ArticleList = (props: ArticleListProps) => {
  const {
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading,
  } = props

  const renderArticle = (article: Article) => (
    <ArticleListItem article={article} view={view} />
  )

  return (
    <div className={classNames(cls.ArticleList, {}, [className])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
    </div>
  )
}
