import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { userCookie } from "~/utils/cookies.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const user = await userCookie.parse(cookieHeader);

  if (!user) {
    throw new Response("Unauthorized", { status: 401 });
  }

  return json({ user });
}

export default function Profile() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Profile</h1>
        <p className="text-gray-600">Gérez vos informations personnelles</p>
      </div>

      <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
        {/* Informations de base */}
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Informations de base
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nom
              </label>
              <p className="mt-1 text-sm text-gray-900">{user.name || "Non défini"}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <p className="mt-1 text-sm text-gray-900">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Actions
          </h2>
          <div className="space-y-4">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Modifier le profil
            </button>
            <button
              type="button"
              className="ml-4 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Changer le mot de passe
            </button>
          </div>
        </div>

        {/* Préférences */}
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Préférences
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Notifications par email
                </label>
                <p className="text-sm text-gray-500">
                  Recevez des notifications sur les mises à jour importantes
                </p>
              </div>
              <button
                type="button"
                className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="sr-only">Activer les notifications</span>
                <span
                  className="translate-x-0 pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 