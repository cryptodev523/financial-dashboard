import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Contact, Transfer } from "../types";
import api from "../lib";

interface TransferState {
  contacts: Contact[];
  transfers: Transfer[];
  selectedContact: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: TransferState = {
  contacts: [],
  transfers: [],
  selectedContact: null,
  loading: false,
  error: null,
};

export const fetchContacts = createAsyncThunk(
  "transfer/fetchContacts",
  async () => {
    const response = await api.getContacts();
    return response;
  }
);

export const createTransfer = createAsyncThunk(
  "transfer/createTransfer",
  async (data: { amount: number; recipientId: string }) => {
    const response = await api.createTransfer(data);
    return response;
  }
);

const transferSlice = createSlice({
  name: "transfer",
  initialState,
  reducers: {
    setSelectedContact: (state, action) => {
      state.selectedContact = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch contacts";
      })
      .addCase(createTransfer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTransfer.fulfilled, (state, action) => {
        state.loading = false;
        state.transfers.push(action.payload);
      })
      .addCase(createTransfer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to create transfer";
      });
  },
});

export const { setSelectedContact } = transferSlice.actions;
export default transferSlice.reducer;
