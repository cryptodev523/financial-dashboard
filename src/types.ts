export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  dateOfBirth: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  profileImage: string;
}

export interface Card {
  id: string;
  balance: number;
  cardHolder: string;
  cardNumber: string;
  validThru: string;
  cardType: "mastercard" | "visa";
  isActive?: boolean;
}

export interface Transaction {
  id: string;
  type: "deposit" | "payment";
  name: string;
  date: string;
  amount: number;
  icon: string;
}

export interface WeeklyActivity {
  day: string;
  deposit: number;
  withdraw: number;
}

export interface ExpenseCategory {
  category: string;
  percentage: number;
}

export interface BalanceHistory {
  month: string;
  balance: number;
}

export interface Transfer {
  id: string;
  amount: number;
  recipientId: string;
  date: string;
  status: "pending" | "completed" | "failed";
}

export interface Contact {
  id: string;
  name: string;
  role: string;
  avatar: string;
}
