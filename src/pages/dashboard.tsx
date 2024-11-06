import MyCards from "../components/dashboard/myCards";
import RecentTransactions from "../components/dashboard/recentTransactions";
import WeeklyActivity from "../components/dashboard/weeklyActivity";
import ExpenseStatistics from "../components/dashboard/expenseStatistics";
import QuickTransfer from "../components/dashboard/quickTransfer";
import BalanceHistory from "../components/dashboard/balanceHistory";

export default function Dashboard() {
  return (
    <div className="p-2 lg:p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MyCards />
        </div>
        <div className="lg:col-span-1">
          <RecentTransactions />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <WeeklyActivity />
        </div>
        <div className="lg:col-span-1">
          <ExpenseStatistics />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <QuickTransfer />
        </div>
        <div className="lg:col-span-2">
          <BalanceHistory />
        </div>
      </div>
    </div>
  );
}
