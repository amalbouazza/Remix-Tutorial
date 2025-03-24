import { NavLink } from "@remix-run/react";

export default function Sidebar() {
  const links = [
    { to: "/dashboard/overview", label: "Vue d'ensemble", icon: "📊" },
    { to: "/dashboard/dataset", label: "Dataset", icon: "📁" },
    { to: "/dashboard/analysis", label: "Analyse", icon: "📈" },
    { to: "/dashboard/test", label: "Test", icon: "🧪" },
    { to: "/dashboard/upload", label: "Upload", icon: "⬆️" },
  ];

  return (
    <nav className="h-full py-6 px-4">
      <div className="space-y-6">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            <span className="mr-3">{link.icon}</span>
            {link.label}
          </NavLink>
        ))}

        {/* Lien vers le profil */}
        <div className="pt-6 mt-6 border-t border-gray-200">
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            <span className="mr-3">👤</span>
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
}