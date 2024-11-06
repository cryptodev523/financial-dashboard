import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../types";
import api from "../lib";

interface UserState {
  data: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await api.getUser();
  return response;
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (userData: Partial<User>) => {
    const response = await api.updateUser(userData);
    return response;
  }
);

export const updateUserAvatar = createAsyncThunk(
  "user/updateUserAvatar",
  async (file: File) => {
    const avatarUrl = await api.uploadAvatar(file);
    const response = await api.updateUser({ avatar: avatarUrl });
    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch user";
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update user";
      })
      .addCase(updateUserAvatar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserAvatar.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateUserAvatar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update avatar";
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
