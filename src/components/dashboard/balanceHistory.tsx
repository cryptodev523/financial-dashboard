import { Line } from "react-chartjs-2";
import DashboardCard from "./dashboardCard";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchStatistics } from "../../store/statisticsSlice";

export default function BalanceHistory() {
  const dispatch = useAppDispatch();
  const { balanceHistory, loading, error } = useAppSelector(
    (state) => state.statistics
  );

  useEffect(() => {
    dispatch(fetchStatistics());
  }, [dispatch]);

  if (loading) {
    return (
      <DashboardCard title="Balance History">
        <div className="flex items-center justify-center h-48">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
        </div>
      </DashboardCard>
    );
  }

  if (error) {
    return (
      <DashboardCard title="Balance History">
        <div className="text-red-500">Error: {error}</div>
      </DashboardCard>
    );
  }

  const data = {
    labels: balanceHistory.map((item) => item.month),
    datasets: [
      {
        label: "Balance",
        data: balanceHistory.map((item) => item.balance),
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 800,
      },
    },
  };

  return (
    <DashboardCard title="Balance History">
      <Line data={data} options={options} />
    </DashboardCard>
  );
}
