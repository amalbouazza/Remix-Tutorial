import { Link } from "@remix-run/react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg p-4">
      <h2 className="text-xl font-bold mb-6">Tableau de Bord</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard/overview"
              className="block p-2 hover:bg-gray-100 rounded"
            >
              Vue d'ensemble
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/upload"
              className="block p-2 hover:bg-gray-100 rounded"
            >
              Upload d'images
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/dataset"
              className="block p-2 hover:bg-gray-100 rounded"
            >
              Génération de dataset
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/analysis"
              className="block p-2 hover:bg-gray-100 rounded"
            >
              Analyse des biais
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/test"
              className="block p-2 hover:bg-gray-100 rounded"
            >
              Test IA
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}