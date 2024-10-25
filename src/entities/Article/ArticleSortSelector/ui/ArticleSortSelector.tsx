import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Select, SelectOption } from 'shared/ui/Select/Select'
import { ArticleSortField } from 'entities/Article/model/types/article'
import { SortOrder } from 'shared/types'
import cls from './ArticleSortSelector.module.scss'

interface ArticleSortSelectorProps {
   className?: string
   sort: ArticleSortField
   order: SortOrder
   onChangeOrder: (newOrder: SortOrder) => void
   onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className, sort, order, onChangeOrder, onChangeSort,
  } = props
  const { t } = useTranslation()

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('by_asc'),
    },
    {
      value: 'desc',
      content: t('by_desc'),
    },
  ], [t])

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('by_date_created'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('by_title'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('by_views'),
    },
  ], [t])

  return (
    <div className={classNames(cls.articleSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
        label={t('sort_by')}
      />
      <Select
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
        label={t('by')}
        className={cls.order}
      />
    </div>
  )
})
