import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { ArticleSortField, ArticleType } from 'entities/Article'
import { SortOrder } from 'shared/types'
import {
  getArticlesPageInited,
} from '../../selectors/articlesPageSelectors'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { articlePageActions } from '../../slices/ArticlePageSlice'

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
      'articlesPage/initArticlesPage',
      async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi
        const inited = getArticlesPageInited(getState())

        if (!inited) {
          const orderFromUrl = searchParams.get('order')
          const sortFromUrl = searchParams.get('sort')
          const searchFromUrl = searchParams.get('search')
          const typeFromUrl = searchParams.get('type')

          if (orderFromUrl) {
            dispatch(articlePageActions.setOrder(orderFromUrl as SortOrder))
          }

          if (sortFromUrl) {
            dispatch(articlePageActions.setSort(sortFromUrl as ArticleSortField))
          }

          if (searchFromUrl) {
            dispatch(articlePageActions.setSearch(searchFromUrl))
          }

          if (typeFromUrl) {
            dispatch(articlePageActions.setType(typeFromUrl as ArticleType))
          }

          dispatch(articlePageActions.initState())
          dispatch(fetchArticlesList({}))
        }
      },
    )
