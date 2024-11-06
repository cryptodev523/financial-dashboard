import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchStatistics } from "../../store/statisticsSlice";
import DashboardCard from "./dashboardCard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function WeeklyActivity() {
  const dispatch = useAppDispatch();
  const { weeklyActivity, loading, error } = useAppSelector(
    (state) => state.statistics
  );

  useEffect(() => {
    dispatch(fetchStatistics());
  }, [dispatch]);

  if (loading) {
    return (
      <DashboardCard title="Weekly Activity">
        <div className="flex items-center justify-center h-48">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
        </div>
      </DashboardCard>
    );
  }

  if (error) {
    return (
      <DashboardCard title="Weekly Activity">
        <div className="text-red-500">Error: {error}</div>
      </DashboardCard>
    );
  }

  const data = {
    labels: weeklyActivity.map((item) => item.day),
    datasets: [
      {
        label: "Deposit",
        data: weeklyActivity.map((item) => item.deposit),
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
      },
      {
        label: "Withdraw",
        data: weeklyActivity.map((item) => item.withdraw),
        borderColor: "rgb(0, 0, 0)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 500,
      },
    },
  };

  return (
    <DashboardCard title="Weekly Activity">
      <Line data={data} options={options} />
    </DashboardCard>
  );
}
