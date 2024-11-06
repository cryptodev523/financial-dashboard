import DashboardCard from "./DashboardCard";

interface Transaction {
  id: string;
  type: "deposit" | "payment";
  name: string;
  date: string;
  amount: number;
  icon: string;
}

export default function RecentTransactions() {
  const transactions: Transaction[] = [
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
