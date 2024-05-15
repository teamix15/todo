import { createAsyncThunk } from "@reduxjs/toolkit";
import { TodoDTO } from "../../models/dto/todo.dto";

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

