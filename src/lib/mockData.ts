import {
  User,
  Card,
  Transaction,
  WeeklyActivity,
  ExpenseCategory,
  BalanceHistory,
  Contact,
} from "../types";

export const mockUser: User = {
  id: "1",
  name: "Charlene Reed",
  username: "charlenereed",
  email: "charlenereed@gmail.com",
  avatar: "/avatars/profile.jpg",
  dateOfBirth: "25 January 1990",
  address: "San Jose, California, USA",
  city: "San Jose",
  postalCode: "45962",
  country: "USA",
};

export const mockCards: Card[] = [
  {
    id: "1",
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    cardNumber: "3778 **** **** 1234",
    validThru: "12/22",
    cardType: "mastercard",
    isActive: true,
  },
  {
    id: "2",
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    cardNumber: "3778 **** **** 1234",
    validThru: "12/22",
    cardType: "visa",
  },
  {
    id: "3",
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    cardNumber: "3778 **** **** 1234",
    validThru: "12/22",
    cardType: "visa",
  },
];

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    type: "deposit",
    name: "Deposit from my Card",
    date: "28 January 2021",
    amount: -850,
    icon: "💳",
  },
  {
    id: "2",
    type: "deposit",
    name: "Deposit Paypal",
    date: "25 January 2021",
    amount: 2500,
    icon: "🅿️",
  },
  {
    id: "3",
    type: "payment",
    name: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5400,
    icon: "👤",
  },
];

export const mockWeeklyActivity: WeeklyActivity[] = [
  { day: "Mon", deposit: 200, withdraw: 450 },
  { day: "Tue", deposit: 300, withdraw: 300 },
  { day: "Wed", deposit: 350, withdraw: 450 },
  { day: "Thu", deposit: 280, withdraw: 400 },
  { day: "Fri", deposit: 300, withdraw: 400 },
  { day: "Sat", deposit: 200, withdraw: 450 },
  { day: "Sun", deposit: 100, withdraw: 300 },
];

export const mockExpenseCategories: ExpenseCategory[] = [
  { category: "Entertainment", percentage: 30 },
  { category: "Investment", percentage: 20 },
  { category: "Bill Expense", percentage: 15 },
  { category: "Others", percentage: 35 },
];

export const mockBalanceHistory: BalanceHistory[] = [
  { month: "Jul", balance: 200 },
  { month: "Aug", balance: 400 },
  { month: "Sep", balance: 750 },
  { month: "Oct", balance: 400 },
  { month: "Nov", balance: 300 },
  { month: "Dec", balance: 550 },
  { month: "Jan", balance: 600 },
];

export const mockContacts: Contact[] = [
  {
    id: "1",
    name: "Livia Bator",
    role: "CEO",
    avatar:
      "https://ewznvoagcbofejzfwekb.supabase.co/storage/v1/object/public/portfolio/test_project/soar/avatar1.png?t=2024-11-06T19%3A50%3A54.490Z",
  },
  {
    id: "2",
    name: "Randy Press",
    role: "Director",
    avatar:
      "https://ewznvoagcbofejzfwekb.supabase.co/storage/v1/object/public/portfolio/test_project/soar/avatar2.png?t=2024-11-06T19%3A51%3A44.308Z",
  },
  {
    id: "3",
    name: "Workman",
    role: "Designer",
    avatar:
      "https://ewznvoagcbofejzfwekb.supabase.co/storage/v1/object/public/portfolio/test_project/soar/avatar3.png",
  },
  {
    id: "4",
    name: "Workman",
    role: "Designer",
    avatar:
      "https://ewznvoagcbofejzfwekb.supabase.co/storage/v1/object/public/portfolio/test_project/soar/avatar4.png?t=2024-11-06T19%3A52%3A00.769Z",
  },
  {
    id: "5",
    name: "Workman",
    role: "Designer",
    avatar:
      "https://ewznvoagcbofejzfwekb.supabase.co/storage/v1/object/public/portfolio/test_project/soar/avatar5.png?t=2024-11-06T19%3A52%3A07.638Z",
  },
];
