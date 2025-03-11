import { Outlet } from "@remix-run/react";
import Sidebar from "~/components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenu principal */}
      <div className="flex-1 p-6">
        <Outlet /> {/* Les sous-routes s'affichent ici */}
      </div>
    </div>
  );
}