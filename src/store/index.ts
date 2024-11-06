import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cardSlice";
import transactionsReducer from "./transactionsSlice";
import userReducer from "./userSlice";
import statisticsReducer from "./statisticsSlice";
import transferReducer from "./transferSlice";
export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    transactions: transactionsReducer,
    user: userReducer,
    statistics: statisticsReducer,
    transfer: transferReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
