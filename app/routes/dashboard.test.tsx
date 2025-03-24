import IATestZone from "~/components/IATestZone";

export default function Test() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Test</h1>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Tests en cours</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium">Test #1</h3>
                <p className="text-sm text-gray-500">En cours d'exécution...</p>
              </div>
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Historique des tests</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div>
                <h3 className="font-medium text-green-800">Test #123</h3>
                <p className="text-sm text-green-600">Complété avec succès</p>
              </div>
              <span className="text-green-600">✓</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
              <div>
                <h3 className="font-medium text-red-800">Test #122</h3>
                <p className="text-sm text-red-600">Échec</p>
              </div>
              <span className="text-red-600">✗</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}