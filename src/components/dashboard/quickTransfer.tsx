import DashboardCard from "./DashboardCard";

interface Contact {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export default function QuickTransfer() {
  const contacts: Contact[] = [
    {
      id: "1",
      name: "Livia Bator",
      role: "CEO",
      avatar: "/avatars/livia.jpg",
    },
    {
      id: "2",
      name: "Randy Press",
      role: "Director",
      avatar: "/avatars/randy.jpg",
    },
    {
      id: "3",
      name: "Workman",
      role: "Designer",
      avatar: "/avatars/workman.jpg",
    },
  ];

  return (
    <DashboardCard title="Quick Transfer">
      <div className="flex space-x-4 mb-6 overflow-x-auto">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex flex-col items-center min-w-[100px]"
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

      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Write Amount"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-6 py-2 bg-gray-900 text-white rounded-lg flex items-center">
          Send
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </div>
    </DashboardCard>
  );
}
