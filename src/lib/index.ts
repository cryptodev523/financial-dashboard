import { User } from "../types";
import {
  mockUser,
  mockCards,
  mockTransactions,
  mockWeeklyActivity,
  mockExpenseCategories,
  mockBalanceHistory,
  mockContacts,
} from "./mockData";

const API_URL = "http://localhost:3001/api";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  getUser: async () => {
    await delay(500);
    return mockUser;
  },

  uploadAvatar: async (file: File) => {
    const formData = new FormData();
    formData.append("avatar", file);

    const response = await fetch(`${API_URL}/avatar/upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload avatar");
    }

    const data = await response.json();
    return data.url;
  },

  updateUser: async (userData: Partial<User>) => {
    await delay(800);
    const currentUser = await api.getUser();

    return {
      ...currentUser,
      ...userData,
      avatar: userData.avatar || currentUser.avatar,
    };
  },

  getCards: async () => {
    await delay(600);
    return mockCards;
  },

  getTransactions: async () => {
    await delay(700);
    return mockTransactions;
  },

  getWeeklyActivity: async () => {
    await delay(400);
    return mockWeeklyActivity;
  },

  getExpenseStatistics: async () => {
    await delay(500);
    return mockExpenseCategories;
  },

  getBalanceHistory: async () => {
    await delay(600);
    return mockBalanceHistory;
  },

  getContacts: async () => {
    await delay(400);
    return mockContacts;
  },

  createTransfer: async (data: { amount: number; recipientId: string }) => {
    await delay(600);
    return {
      id: Math.random().toString(36).substr(2, 9),
      amount: data.amount,
      recipientId: data.recipientId,
      date: new Date().toISOString(),
      status: "completed" as const,
    };
  },
};

export default api;
