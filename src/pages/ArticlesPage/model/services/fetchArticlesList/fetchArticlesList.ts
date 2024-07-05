import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'
import { Comment } from 'entities/Comment'
import i18n from 'shared/config/i18n/i18n'

export const fetchArticlesList = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi

  try {
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
      },
    })

    if (!response.data) throw new Error()

    return response.data
  } catch (e) {
    return rejectWithValue(i18n.t('error', { ns: 'auth' }))
  }
})
