import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { Decorator } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
}

const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
):
  Decorator => (Story) => (
  /* eslint-disable react/jsx-indent */
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <Story />
  </StoreProvider>
)

export default StoreDecorator
