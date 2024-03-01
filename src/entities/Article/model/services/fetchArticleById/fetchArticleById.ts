import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import i18n from 'shared/config/i18n/i18n'
import { Article } from '../../types/article'

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>('articleDetails/fetchArticleById', async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi

  try {
    const response = await extra.api.get<Article>(`/articles/${articleId}`)

    if (!response.data) throw new Error()

    return response.data
  } catch (e) {
    return rejectWithValue(i18n.t('error', { ns: 'auth' }))
  }
})
