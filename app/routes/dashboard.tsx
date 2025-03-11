import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { userCookie } from "~/utils/cookies.server";

export const loader = async ({ request }: { request: Request }) => {
  // Récupérer le cookie de l'utilisateur
  const cookieHeader = request.headers.get("Cookie");
  const user = await userCookie.parse(cookieHeader);

  // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
  if (!user) {
    return redirect("/");
  }

  // Retourner les informations de l'utilisateur
  return json({ user });
};

export default function Dashboard() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">Tableau de Bord</h1>
        <p className="text-gray-600 mt-2">Bienvenue, {user.name} !</p>
        <div className="mt-6">
          <p className="text-gray-700">Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
}