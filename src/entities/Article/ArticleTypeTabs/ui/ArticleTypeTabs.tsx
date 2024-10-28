import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { TabItem, Tabs } from 'shared/ui/Tabs/ui/Tabs'
import { ArticleType } from 'entities/Article/model/types/article'

interface ArticleTypeTabsProps {
   className?: string
   value: ArticleType
   onChangeType: (tab: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props
  const { t } = useTranslation()

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: 'All',
    },
    {
      value: ArticleType.IT,
      content: 'IT',
    },
    {
      value: ArticleType.SCIENCE,
      content: 'SCIENCE',
    },
    {
      value: ArticleType.TECHNOLOGY,
      content: 'TECHNOLOGY',
    },
    {
      value: ArticleType.ECONOMICS,
      content: 'ECONOMICS',
    },
  ], [])

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType)
  }, [onChangeType])

  return (
    <Tabs
      value={value}
      tabs={typeTabs}
      onTabClick={onTabClick}
      className={classNames('', {}, [className])}
    />
  )
})
