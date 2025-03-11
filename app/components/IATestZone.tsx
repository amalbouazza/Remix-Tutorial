import { useState } from "react";

export default function IATestZone() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<{ label: string; confidence: number } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleTest = () => {
    if (!file) {
      alert("Veuillez sélectionner une image.");
      return;
    }

    // Simuler une réponse de l'IA
    const fakeResult = { label: "Voiture", confidence: 0.95 };
    setResult(fakeResult);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Sélectionner une image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        onClick={handleTest}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        Tester avec l'IA
      </button>
      {result && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Résultats du test</h2>
          <p>Label: {result.label}</p>
          <p>Confiance: {(result.confidence * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
}