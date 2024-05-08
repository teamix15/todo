import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TodoDTO } from "../models/dto/todo.dto";

interface TodoState {
  todos: TodoDTO[];
  isLoading: false;
  error: "";
}

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  error: "",
};

const getTodos = createAsyncThunk<
  TodoDTO[],
  undefined,
  { rejectValue: string }
>("todo/getTodos", async (_, { rejectWithValue }) => {
  let todos: TodoDTO[] = [];

  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!response.ok) {
    rejectWithValue("Parse error");
  }

  const jsonData = await response.json();
  todos = jsonData.map((item: TodoDTO) => {
    return {
      userId: item.userId,
      id: item.id,
      title: item.title,
      completed: item.completed,
    };
  });

  return todos;
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

export const todoReducer =  todoSlice.reducer
