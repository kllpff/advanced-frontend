import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Comment } from 'entities/Comment/model/types/comment'
import cls from './CommentList.module.scss'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading: boolean
}

export const CommentList = (props: CommentListProps) => {
  const { className, comments, isLoading } = props
  const { t } = useTranslation('article')

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    )
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {
        comments?.length
          ? comments.map((comment) => (
            <CommentCard
              isLoading={isLoading}
              className={cls.comment}
              comment={comment}
              key={comment.id}
            />
          ))
          : <Text text={t('no_comments')} />
      }
    </div>
  )
}
