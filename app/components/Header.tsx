// app/components/Header.tsx
import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link to="/dashboard" className="hover:text-gray-400">
          🏠 Dashboard
        </Link>
        <Link to="/profile" className="hover:text-gray-400">
          👤 Profil
        </Link>
      </div>
      <div>
        <Link to="/logout" className="hover:text-gray-400">
          🔒 Déconnexion
        </Link>
      </div>
    </header>
  );
}