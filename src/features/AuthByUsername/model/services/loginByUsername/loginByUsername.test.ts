import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { loginByUsername } from './loginByUsername'

describe('loginByUsername.test', () => {
  // let dispatch: Dispatch
  // let getState: () => StateSchema

  // beforeEach(() => {
  //   dispatch = jest.fn()
  //   getState = jest.fn()
  // })

  // test('success test with data', async () => {
  //   const userValue = { username: 'username', id: '1' }

  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
  //   const action = loginByUsername({ username: 'username', password: '123123' })
  //   const result = await action(dispatch, getState, undefined)

  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
  //   expect(dispatch).toHaveBeenCalledTimes(3)
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe('fulfilled')
  //   expect(result.payload).toEqual(userValue)
  // })

  // test('error test with 403 status code', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
  //   const action = loginByUsername({ username: 'username', password: '123123' })
  //   const result = await action(dispatch, getState, undefined)

  //   expect(dispatch).toHaveBeenCalledTimes(2)
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe('rejected')
  //   expect(result.payload).toEqual('error')
  // })

  test('success test with data', async () => {
    const userValue = { username: 'username', id: '1' }

    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))
    const result = await thunk.callThunk({ username: 'username', password: '123123' })

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userValue)
  })

  test('error test with 403 status code', async () => {
    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk({ username: 'username', password: '123123' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('error')
  })
})
