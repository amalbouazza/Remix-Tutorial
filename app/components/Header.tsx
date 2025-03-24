//app/components/Header.tsx
import { Link } from "@remix-run/react";

interface HeaderProps {
  user: {
    name?: string;
    email: string;
  };
}

export default function Header({ user }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-30">
      <div className="h-16 px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            {user.name || user.email}
          </div>
          <form action="/logout" method="post">
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Déconnexion
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}