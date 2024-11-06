import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchCards } from "../store/cardSlice";
import CreditCard from "../components/dashboard/creditCard";

export default function CreditCards() {
  const dispatch = useAppDispatch();
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
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <CreditCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
