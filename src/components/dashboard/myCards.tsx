import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardCard from "./dashboardCard";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchCards } from "../../store/cardSlice";
import ChipCard from "../../assets/Chip_Card.png";
import ChipCardDark from "../../assets/Chip_Card_dark.png";
import CreditCard from "./creditCard";

export default function MyCards() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    items: cards,
    loading,
    error,
  } = useAppSelector((state) => state.cards);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <DashboardCard
      title="My Cards"
      onSeeAll={() => {
        navigate("/credit-cards");
      }}
      withoutPadding
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.slice(0, 2).map((card) => (
          <CreditCard key={card.id} card={card} />
        ))}
      </div>
    </DashboardCard>
  );
}
