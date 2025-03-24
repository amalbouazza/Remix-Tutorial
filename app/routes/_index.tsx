import { json, redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { userCookie } from "~/utils/cookies.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const user = await userCookie.parse(cookieHeader);

  if (user) {
    return redirect("/dashboard");
  }

  return json({});
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return json({ error: "Email and password are required." }, { status: 400 });
  }

  // Simuler une vérification de l'utilisateur
  const user = { id: "123", name, email, password };

  // Créer un cookie avec les informations de l'utilisateur
  const cookie = await userCookie.serialize(user);

  // Rediriger vers le tableau de bord avec le cookie
  return redirect("/dashboard", {
    headers: {
      "Set-Cookie": cookie,
    },
  });
}

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Welcome Back
          </h1>
          
          <Form method="post" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}