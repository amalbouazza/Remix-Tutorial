import { useState } from "react";

export default function BiasDetection() {
  const [data, setData] = useState<{ label: string; count: number }[]>([]);

  const handleAnalyze = () => {
    // Simuler des données d'analyse
    const fakeData = [
      { label: "Marque A", count: 120 },
      { label: "Marque B", count: 90 },
      { label: "Marque C", count: 200 },
    ];
    setData(fakeData);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleAnalyze}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        Analyser les biais
      </button>
      {data.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Résultats de l'analyse</h2>
          <ul className="space-y-2">
            {data.map((item) => (
              <li key={item.label} className="flex justify-between">
                <span>{item.label}</span>
                <span>{item.count} images</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}