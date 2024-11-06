import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DashboardCard from "./dashboardCard";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchStatistics } from "../../store/statisticsSlice";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpenseStatistics() {
  const dispatch = useAppDispatch();
  const { expenseCategories, loading, error } = useAppSelector(
    (state) => state.statistics
  );

  useEffect(() => {
    dispatch(fetchStatistics());
  }, [dispatch]);

  if (loading) {
    return (
      <DashboardCard title="Expense Statistics">
        <div className="flex items-center justify-center h-48">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
        </div>
      </DashboardCard>
    );
  }

  if (error) {
    return (
      <DashboardCard title="Expense Statistics">
        <div className="text-red-500">Error: {error}</div>
      </DashboardCard>
    );
  }

  const data = {
    labels: expenseCategories.map((item) => item.category),
    datasets: [
      {
        data: expenseCategories.map((item) => item.percentage),
        backgroundColor: [
          "rgb(49, 46, 129)",
          "rgb(59, 130, 246)",
          "rgb(249, 115, 22)",
          "rgb(17, 24, 39)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
    },
  };

  return (
    <DashboardCard title="Expense Statistics">
      <Pie data={data} options={options} />
    </DashboardCard>
  );
}
