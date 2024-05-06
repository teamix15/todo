import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    users: usersReducer,
  }
}
)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>   