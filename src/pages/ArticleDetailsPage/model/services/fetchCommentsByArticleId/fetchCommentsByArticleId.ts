import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'
import i18n from 'shared/config/i18n/i18n'

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>('articleDetails/fetchCommentsByArticleId', async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi

  if (!articleId) {
    return rejectWithValue('errors')
  }

  try {
    const response = await extra.api.get<Comment[]>(`/comments/${articleId}`, {
      params: {
        articleId,
        _expand: 'user',
      },
    })

    if (!response.data) throw new Error()

    return response.data
  } catch (e) {
    return rejectWithValue(i18n.t('error', { ns: 'auth' }))
  }
})
