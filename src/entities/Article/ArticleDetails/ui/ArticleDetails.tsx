import { memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/ArticleDetails'
import { TextAlign, Text } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import cls from './ArticleDetails.module.scss'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'

interface ArticleDetailsProps {
   className?: string
   id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props
  const { t } = useTranslation('article')
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const artice = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailsError)

  useEffect(() => {
    dispatch(fetchArticleById(id))
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = (
      <div>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </div>
    )
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('error_loading')}
      />
    )
  } else {
    content = (
      <div>{t('article_details')}</div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  )
})
