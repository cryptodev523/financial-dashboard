import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../lib";
import type { WeeklyActivity, ExpenseCategory, BalanceHistory } from "../types";

interface StatisticsState {
  weeklyActivity: WeeklyActivity[];
  expenseCategories: ExpenseCategory[];
  balanceHistory: BalanceHistory[];
  loading: boolean;
  error: string | null;
}

const initialState: StatisticsState = {
  weeklyActivity: [],
  expenseCategories: [],
  balanceHistory: [],
  loading: false,
  error: null,
};

export const fetchStatistics = createAsyncThunk(
  "statistics/fetchAll",
  async () => {
    const [weeklyActivity, expenseCategories, balanceHistory] =
      await Promise.all([
        api.getWeeklyActivity(),
        api.getExpenseStatistics(),
        api.getBalanceHistory(),
      ]);
    return { weeklyActivity, expenseCategories, balanceHistory };
  }
);

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatistics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStatistics.fulfilled, (state, action) => {
        state.loading = false;
        state.weeklyActivity = action.payload.weeklyActivity;
        state.expenseCategories = action.payload.expenseCategories;
        state.balanceHistory = action.payload.balanceHistory;
      })
      .addCase(fetchStatistics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch statistics";
      });
  },
});

export default statisticsSlice.reducer;
