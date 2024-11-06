import MyCards from "../components/dashboard/myCards";
import RecentTransactions from "../components/dashboard/recentTransactions";
import WeeklyActivity from "../components/dashboard/weeklyActivity";
import ExpenseStatistics from "../components/dashboard/expenseStatistics";
import QuickTransfer from "../components/dashboard/quickTransfer";
import BalanceHistory from "../components/dashboard/balanceHistory";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MyCards />
        <RecentTransactions />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WeeklyActivity />
        <ExpenseStatistics />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuickTransfer />
        <BalanceHistory />
      </div>
    </div>
  );
}
