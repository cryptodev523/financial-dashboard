import { useLocation } from "react-router-dom";
import Avatar from "../../assets/avatar1.png";

export default function Header() {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Overview";
      case "/settings":
        return "Settings";
      case "/transactions":
        return "Transactions";
      case "/accounts":
        return "Accounts";
      case "/investments":
        return "Investments";
      case "/credit-cards":
        return "Credit Cards";
      case "/loans":
        return "Loans";
      case "/services":
        return "Services";
      case "/privileges":
        return "My Privileges";
      default:
        return "Overview";
    }
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-6 py-3">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 mt-2">
          <div className="flex items-center gap-4 ml-24 lg:ml-0">
            <nav>
              <span className="text-2xl lg:text-3xl font-semibold text-primary-500">
                {getTitle()}
              </span>
            </nav>
            <button className="flex lg:hidden items-center ml-auto">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src={Avatar}
                alt="Profile"
              />
            </button>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:ml-auto w-full lg:w-auto">
            <div className="relative flex-1 lg:flex-none">
              <span className="absolute inset-y-0 left-3 flex items-center">
                <svg
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search for something"
                className="w-full lg:w-64 pl-10 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm"
              />
            </div>

            <div className="hidden lg:flex items-center justify-between lg:justify-start gap-4">
              <button className="p-2 text-gray-600 hover:text-gray-700">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                </svg>
              </button>

              <button className="p-2 text-gray-600 hover:text-gray-700">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              <button className="flex items-center">
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src={Avatar}
                  alt="Profile"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
