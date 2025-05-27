import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";

export default async function AuthCallbackPage() {
  // Authentication
  const auth = await onAuthenticateUser();

  if (auth.status === 200 || auth.status === 201) {
    if (auth.user?.workspace && auth.user.workspace.id) {
      redirect(`/dashboard/${auth.user.workspace.id}`);
    } else {
      redirect("/auth/sign-in");
    }
  } else {
    redirect("/auth/sign-in");
  }

  return null;
}
