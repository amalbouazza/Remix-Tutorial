import { Outlet, useLoaderData } from "@remix-run/react";
import Sidebar from "~/components/Sidebar";
import Header from "~/components/Header";
import { useEffect, useState } from "react";
import { json, redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { userCookie } from "~/utils/cookies.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const user = await userCookie.parse(cookieHeader);

  if (!user) {
    return redirect("/");
  }

  return json({ user });
}

export default function Dashboard() {
  const { user } = useLoaderData<typeof loader>();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header fixe */}
      <Header user={user} />

      <div className="flex">
        {/* Sidebar fixe */}
        <aside 
          className={`fixed left-0 top-0 pt-16 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 z-20`}
        >
          <Sidebar />
        </aside>

        {/* Bouton menu mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden fixed top-20 left-4 z-30 p-2 rounded-md bg-blue-600 text-white"
          aria-label="Toggle menu"
          title="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Contenu principal */}
        <main className="flex-1 md:ml-64 pt-16 min-h-screen">
          <div className="p-6">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <Outlet />
              </div>
            </div>
          </div>
        </main>

        {/* Overlay pour mobile */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </div>
  );
}