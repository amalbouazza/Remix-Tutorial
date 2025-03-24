import BiasDetection from "~/components/BiasDetection";

export default function Analysis() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Analyse</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Résultats d'analyse</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Précision</span>
              <span className="font-medium">95%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Rappel</span>
              <span className="font-medium">92%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">F1-Score</span>
              <span className="font-medium">93.5%</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Graphiques</h2>
          <p className="text-gray-600">Les graphiques d'analyse seront affichés ici</p>
        </div>
      </div>
    </div>
  );
}