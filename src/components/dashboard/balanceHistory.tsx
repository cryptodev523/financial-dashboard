import { Line } from "react-chartjs-2";
import DashboardCard from "./DashboardCard";

export default function BalanceHistory() {
  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Balance",
        data: [200, 400, 750, 400, 300, 550, 600],
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
