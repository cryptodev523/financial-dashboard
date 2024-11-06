import { useEffect } from "react";
import DashboardCard from "./dashboardCard";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchTransactions } from "../../store/transactionsSlice";

export default function RecentTransactions() {
  const dispatch = useAppDispatch();
  const {
    items: transactions,
    loading,
    error,
  } = useAppSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  if (loading) {
    return (
      <DashboardCard title="Recent Transaction">
        <div className="flex items-center justify-center h-48">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
        </div>
      </DashboardCard>
    );
  }

  if (error) {
    return (
      <DashboardCard title="Recent Transaction">
        <div className="flex items-center justify-center h-48 text-red-500">
          Error: {error}
        </div>
      </DashboardCard>
    );
  }

  return (
    <DashboardCard title="Recent Transaction">
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-lg">{transaction.icon}</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">
                  {transaction.name}
                </p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <span
              className={`font-medium ${
                transaction.amount > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {transaction.amount > 0 ? "+" : ""}
              {transaction.amount.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
