import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { userCookie } from "~/utils/cookies.server";

export const loader = async ({
  params,
  request,
}: {
  params: { id: string };
  request: Request;
}) => {
  // Récupérer le cookie de l'utilisateur
  const cookieHeader = request.headers.get("Cookie");
  const user = await userCookie.parse(cookieHeader);

  // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
  if (!user) {
    return redirect("/");
  }

  // Vérifier si l'utilisateur correspond à l'ID dans l'URL
  if (user.id !== params.id) {
    return redirect("/");
  }

  // Retourner les informations de l'utilisateur
  return json({ user });
};

export const action = async ({
  params,
  request,
}: {
  params: { id: string };
  request: Request;
}) => {
  const formData = await request.formData();
  const actionType = formData.get("action");

  if (actionType === "logout" || actionType === "delete") {
    // Supprimer le cookie
    return redirect("/", {
      headers: {
        "Set-Cookie": await userCookie.serialize(null, {
          maxAge: 0, // Supprimer le cookie
        }),
      },
    });
  }
};

export default function Profile() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Profil</h1>
        <p className="text-gray-600 mt-2">Bienvenue, {user.name} !</p>
        <div className="mt-6 flex space-x-4">
          <Form method="post">
            <input type="hidden" name="action" value="logout" />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Logout
            </button>
          </Form>
          <Form method="post">
            <input type="hidden" name="action" value="delete" />
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Delete Account
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}