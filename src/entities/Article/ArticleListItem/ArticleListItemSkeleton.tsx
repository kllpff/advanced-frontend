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
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import cls from './ArticleListItem.module.scss'
import { Article, ArticleTextBlock, ArticleView } from '../model/types/article'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ui/ArticleTextBlockComponent'

interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleView
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
  const { className, view } = props

  if (view === 'BIG') {
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Skeleton border="50%" height={30} width={30} />
            <Skeleton width={150} height={16} className={cls.username} />
            <Skeleton width={150} height={16} className={cls.date} />
          </div>
          <Skeleton width={250} height={24} className={cls.title} />
          <Skeleton height={200} className={cls.img} />
          <div className={cls.footer}>
            <Skeleton height={36} width={200} />
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <Skeleton width={200} height={200} className={cls.img} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={cls.title} />
      </Card>
    </div>
  )
}
