import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import {
  getArticlesPageInited,
} from '../../selectors/articlesPageSelectors'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { articlePageActions } from '../../slices/ArticlePageSlice'

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
      'articlesPage/initArticlesPage',
      async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi
        const inited = getArticlesPageInited(getState())

        if (!inited) {
          dispatch(articlePageActions.initState())
          dispatch(fetchArticlesList({
            page: 1,
          }))
        }
      },
    )
