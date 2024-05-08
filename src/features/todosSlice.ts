import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TodoDTO } from "../models/dto/todo.dto";

interface TodoState {
  todos: TodoDTO[];
  isLoading: boolean;
  error: "";
}

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  error: "",
};

export const getTodos = createAsyncThunk<
  TodoDTO[],
  undefined,
  { rejectValue: string }
>("todo/getTodos", async (_, { rejectWithValue }) => {
  let todos: TodoDTO[] = [];

  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!response.ok) {
    rejectWithValue("Error parsing todos");
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
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.isLoading = false;
    });

    builder.addCase(getTodos.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
  },
});

export const todosReducer = todoSlice.reducer;
