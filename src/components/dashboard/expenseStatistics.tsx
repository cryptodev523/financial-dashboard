import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DashboardCard from "./DashboardCard";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpenseStatistics() {
  const data = {
    labels: ["Entertainment", "Investment", "Bill Expense", "Others"],
    datasets: [
      {
        data: [30, 20, 15, 35],
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
