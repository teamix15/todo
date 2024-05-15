import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserDTO } from "../../models/dto/user.dto";

interface UsersState {
  value: UserDTO[];
  isLoading: boolean;
  error: string;
}

const initialState: UsersState = {
  value: [],
  isLoading: false,
  error: "",
};

export const getUsers = createAsyncThunk<
  UserDTO[],
  undefined,
  { rejectValue: string }
>("users/getUsers", async (_, { rejectWithValue }) => {
  let users: UserDTO[] = [];

  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    rejectWithValue("Error parsing users");
  }

  const jsonData = await response.json();

  users = jsonData.map((item: UserDTO) => item);
  return users;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.value = action.payload;
    });

    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
  },
});

export const usersReducer = usersSlice.reducer;
