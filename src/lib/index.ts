import { User } from "../types";
import { imageStorage } from "../utils/imageStorage";
import {
  mockUser,
  mockCards,
  mockTransactions,
  mockWeeklyActivity,
  mockExpenseCategories,
  mockBalanceHistory,
  mockContacts,
} from "./mockData";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  getUser: async () => {
    await delay(500);
    return mockUser;
  },

  updateUser: async (userData: Partial<User>) => {
    await delay(800);
    if (userData.id && userData.profileImage) {
      imageStorage.saveImage(userData.id, userData.profileImage);
    }
    return { ...mockUser, ...userData };
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
