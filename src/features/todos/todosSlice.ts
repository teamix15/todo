import { createSlice } from "@reduxjs/toolkit";
import { TodoDTO } from "../../models/dto/todo.dto";
import { getTodos } from "./todosThunks";

interface TodosState {
  value: TodoDTO[];
  isLoading: boolean;
  error: "";
}

const initialState: TodosState = {
  value: [],
  isLoading: false,
  error: "",
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
    });

    builder.addCase(getTodos.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
  },
});

export const todosReducer = todoSlice.reducer;

export { getTodos };
