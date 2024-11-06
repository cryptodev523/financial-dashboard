import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import api from "../lib/index";
import type { Card } from "../types";

interface CardsState {
  items: Card[];
  loading: boolean;
  error: string | null;
}

const initialState: CardsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
  const response = await api.getCards();
  return response;
});

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCards.fulfilled, (state, action: PayloadAction<Card[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch cards";
      });
  },
});

export default cardsSlice.reducer;
