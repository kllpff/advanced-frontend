/* eslint-disable react/jsx-no-undef */
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon/Icon'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { useCallback } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import cls from './ArticleListItem.module.scss'
import { Article, ArticleView } from '../model/types/article'
import { useNavigate } from 'react-router-dom'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
}

export const ArticleListItem = (props: ArticleListItemProps) => {
  const { className, article, view } = props
  const navigate = useNavigate()

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id)
  }, [article.id, navigate])

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        {article.title}
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <div className={cls.card}>
        <div className={cls.imageWrapper}>
          <img
            className={cls.img}
            src={article.img}
            alt={article.title}
          />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          <Text text={article.type.join(', ')} className={cls.types} />
          <Text text={String(article.views)} className={cls.views} />
          <Icon Svg={EyeIcon} className={cls.icon} />
        </div>
        <Text text={article.title} className={cls.title} />
      </div>
    </div>
  )
}
