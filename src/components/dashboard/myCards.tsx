import { useState } from "react";
import DashboardCard from "./DashboardCard";

interface Card {
  id: string;
  balance: number;
  cardHolder: string;
  cardNumber: string;
  validThru: string;
  cardType: "mastercard" | "visa";
  isActive?: boolean;
}

export default function MyCards() {
  const [cards] = useState<Card[]>([
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
  ]);

  return (
    <DashboardCard title="My Cards" onSeeAll={() => {}} withoutPadding>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative overflow-hidden rounded-xl p-6 ${
              card.isActive ? "bg-gray-900" : "bg-white border border-gray-200"
            }`}
          >
            <div className="absolute top-6 right-6">
              {card.cardType === "mastercard" ? (
                <div className="flex space-x-1">
                  <div className="w-6 h-6 rounded-full bg-gray-400 opacity-80" />
                  <div className="w-6 h-6 rounded-full bg-gray-500 opacity-80" />
                </div>
              ) : (
                <svg className="w-12 h-8" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" rx="4" fill="#1434CB" />
                  <path d="M18.5 25H29.5V7H18.5V25Z" fill="#FF9F00" />
                </svg>
              )}
            </div>

            <div className="mb-4">
              <span
                className={`text-sm ${
                  card.isActive ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Balance
              </span>
              <div
                className={`text-2xl font-bold mt-1 ${
                  card.isActive ? "text-white" : "text-gray-900"
                }`}
              >
                ${card.balance.toLocaleString()}
              </div>
            </div>

            <div
              className={`font-mono text-lg mb-6 ${
                card.isActive ? "text-white" : "text-gray-900"
              }`}
            >
              {card.cardNumber}
            </div>

            <div className="flex justify-between">
              <div>
                <div
                  className={`text-xs ${
                    card.isActive ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  CARD HOLDER
                </div>
                <div
                  className={`mt-1 ${
                    card.isActive ? "text-white" : "text-gray-900"
                  }`}
                >
                  {card.cardHolder}
                </div>
              </div>
              <div>
                <div
                  className={`text-xs ${
                    card.isActive ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  VALID THRU
                </div>
                <div
                  className={`mt-1 ${
                    card.isActive ? "text-white" : "text-gray-900"
                  }`}
                >
                  {card.validThru}
                </div>
              </div>
            </div>

            {card.isActive && (
              <div className="absolute inset-0 opacity-10">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="pattern"
                      x="0"
                      y="0"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle
                        cx="20"
                        cy="20"
                        r="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="url(#pattern)"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
