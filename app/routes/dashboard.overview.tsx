import Chart from "~/components/Chart";

export default function Overview() {
  const imageData = {
    labels: ["Marque A", "Marque B", "Marque C"],
    datasets: [
      {
        label: "Nombre d'images",
        data: [120, 90, 200],
        backgroundColor: ["#3b82f6", "#ef4444", "#10b981"],
      },
    ],
  };

  const performanceData = {
    labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],
    datasets: [
      {
        label: "Performance",
        data: [65, 78, 90, 85, 95],
        backgroundColor: ["#60a5fa"],
      },
    ],
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Vue d'ensemble</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Statistiques</h2>
          <p className="text-gray-600">Visualisez vos statistiques ici</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Activités récentes</h2>
          <p className="text-gray-600">Vos dernières activités apparaîtront ici</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Notifications</h2>
          <p className="text-gray-600">Vos notifications seront affichées ici</p>
        </div>
      </div>
    </div>
  );
}