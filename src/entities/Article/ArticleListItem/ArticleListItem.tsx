/* eslint-disable react/jsx-no-undef */
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon/Icon'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { useCallback } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useNavigate } from 'react-router-dom'
import { Card } from 'shared/ui/Card/ui/Card'
import { useHover } from 'shared/lib/hooks/useHover/useHover'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './ArticleListItem.module.scss'
import { Article, ArticleTextBlock, ArticleView } from '../model/types/article'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ui/ArticleTextBlockComponent'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
}

export const ArticleListItem = (props: ArticleListItemProps) => {
  const { className, article, view } = props
  const [isHover, bindHover] = useHover()
  const { t } = useTranslation('article')
  const navigate = useNavigate()

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id)
  }, [article.id, navigate])

  const types = <Text text={article.type.join(', ')} className={cls.types} />
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} className={cls.icon} />
    </>
  )

  if (view === 'BIG') {
    const textBlock = article.blocks.find((block) => block.type === 'TEXT') as ArticleTextBlock
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text text={article.title} className={cls.title} />
          {types}
          <img src={article.img} className={cls.img} alt={article.title} />
          {textBlock && (
            <ArticleTextBlockComponent className={cls.textBlock} block={textBlock} />
          )}
          <div className={cls.footer}>
            <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
              {t('read_more')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Card className={cls.card} onClick={onOpenArticle}>
        <div className={cls.imageWrapper}>
          <img
            className={cls.img}
            src={article.img}
            alt={article.title}
          />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </div>
  )
}
