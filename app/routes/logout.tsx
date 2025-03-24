import { redirect, type ActionFunctionArgs } from "@remix-run/node";
import { userCookie } from "~/utils/cookies.server";

export async function action({ request }: ActionFunctionArgs) {
  return redirect("/", {
    headers: {
      "Set-Cookie": await userCookie.serialize(null, {
        maxAge: 0,
      }),
    },
  });
}

export async function loader() {
  return redirect("/");
} 