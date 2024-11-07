import { useState, useEffect } from "react";
import DashboardCard from "./dashboardCard";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchContacts,
  createTransfer,
  setSelectedContact,
} from "../../store/transferSlice";

export default function QuickTransfer() {
  const dispatch = useAppDispatch();
  const { contacts, selectedContact, loading, error } = useAppSelector(
    (state) => state.transfer
  );
  const [amount, setAmount] = useState("");

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleContactClick = (contactId: string) => {
    dispatch(setSelectedContact(contactId));
  };

  const handleTransfer = async () => {
    if (!selectedContact || !amount) return;

    try {
      await dispatch(
        createTransfer({
          amount: parseFloat(amount),
          recipientId: selectedContact,
        })
      ).unwrap();
      setAmount("");
      dispatch(setSelectedContact(null));
    } catch (error) {
      console.error("Failed to create transfer:", error);
    }
  };

  if (loading) {
    return (
      <DashboardCard title="Quick Transfer">
        <div className="flex items-center justify-center h-48">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
        </div>
      </DashboardCard>
    );
  }

  if (error) {
    return (
      <DashboardCard title="Quick Transfer">
        <div className="text-red-500">Error: {error}</div>
      </DashboardCard>
    );
  }

  return (
    <DashboardCard title="Quick Transfer">
      <div className="flex space-x-4 mb-6 overflow-x-auto">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className={`flex flex-col items-center min-w-[100px] cursor-pointer ${
              selectedContact === contact.id ? "opacity-100" : "opacity-60"
            }`}
            onClick={() => handleContactClick(contact.id)}
          >
            <img
              src={contact.avatar}
              alt={contact.name}
              className="w-12 h-12 rounded-full mb-2"
            />
            <p className="text-sm font-medium text-gray-900">{contact.name}</p>
            <p className="text-xs text-gray-500">{contact.role}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="text"
          placeholder="Write Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleTransfer}
          disabled={!selectedContact || !amount}
          className="w-full sm:w-auto px-6 py-2 bg-gray-900 text-white rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send
          <svg
            width="26"
            height="23"
            viewBox="0 0 26 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.9824 0.923369C26.1091 0.333347 25.5307 -0.164153 24.9664 0.0511577L0.490037 9.39483C0.195457 9.50731 0.000610804 9.78965 1.43342e-06 10.105C-0.000607937 10.4203 0.193121 10.7034 0.487294 10.817L7.36317 13.4726V21.8369C7.36317 22.1897 7.60545 22.4963 7.94873 22.5779C8.28972 22.659 8.64529 22.4967 8.80515 22.1796L11.6489 16.5364L18.5888 21.6868C19.011 22.0001 19.6178 21.8008 19.7714 21.2974C26.251 0.0528342 25.9708 0.97674 25.9824 0.923369ZM19.9404 3.60043L8.01692 12.092L2.88664 10.1106L19.9404 3.60043ZM8.8866 13.3428L19.2798 5.94118C10.3366 15.3758 10.8037 14.8792 10.7647 14.9317C10.7067 15.0096 10.8655 14.7058 8.8866 18.6327V13.3428ZM18.6293 19.8197L12.5206 15.2862L23.566 3.63395L18.6293 19.8197Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </DashboardCard>
  );
}
