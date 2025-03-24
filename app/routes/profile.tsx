import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { userCookie } from "~/utils/cookies.server";

export async function loader({ request }: { request: Request }) {
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
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <p className="mt-1 text-lg">{user.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="mt-1 text-lg">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 