import { Card } from "../../types";
import ChipCard from "../../assets/Chip_Card.png";
import ChipCardDark from "../../assets/Chip_Card_Dark.png";

interface CreditCardProps {
  card: Card;
}

export default function CreditCard({ card }: CreditCardProps) {
  return (
    <div
      key={card.id}
      className={`relative overflow-hidden rounded-2xl p-6 ${
        card.isActive
          ? "bg-gradient-to-br from-gray-800 to-gray-900"
          : "bg-white border border-gray-200"
      }`}
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <span
            className={`text-xs ${
              card.isActive ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Balance
          </span>
          <div
            className={`text-2xl font-semibold mt-1 ${
              card.isActive ? "text-white" : "text-gray-900"
            }`}
          >
            ${card.balance.toLocaleString()}
          </div>
        </div>

        <img
          src={card.isActive ? ChipCard : ChipCardDark}
          alt="chip card"
          className="w-12"
        />
      </div>

      <div className="flex justify-between">
        <div>
          <div
            className={`text-[10px] font-medium ${
              card.isActive ? "text-gray-400" : "text-gray-500"
            }`}
          >
            CARD HOLDER
          </div>
          <div
            className={`text-sm mt-1 ${
              card.isActive ? "text-white" : "text-gray-900"
            }`}
          >
            {card.cardHolder}
          </div>
        </div>
        <div>
          <div
            className={`text-[10px] font-medium ${
              card.isActive ? "text-gray-400" : "text-gray-500"
            }`}
          >
            VALID THRU
          </div>
          <div
            className={`text-sm mt-1 ${
              card.isActive ? "text-white" : "text-gray-900"
            }`}
          >
            {card.validThru}
          </div>
        </div>
      </div>

      <div
        className={`flex items-center justify-between my-8 ${
          card.isActive ? "text-white" : "text-gray-900"
        }`}
      >
        <div className="font-mono text-xl tracking-wider">
          {card.cardNumber}
        </div>
        <div>
          <svg
            width="44"
            height="30"
            viewBox="0 0 44 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="15"
              cy="15"
              r="15"
              fill="currentColor"
              fillOpacity="0.5"
            />
            <circle
              cx="29"
              cy="15"
              r="15"
              fill="currentColor"
              fillOpacity="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
