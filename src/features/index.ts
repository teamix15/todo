import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './todosSlice'
import { usersReducer } from './usersSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    users: usersReducer
  }
}
)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>   