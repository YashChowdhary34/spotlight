import { addReferral } from "@/actions/affiliate";
import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";

type searchParams = {
  affiliateCode?: string;
  referrerId?: string;
};

export default async function AuthCallbackPage({
  affiliateCode,
  referrerId,
}: searchParams) {
  if (affiliateCode) {
    const newReferral = await addReferral(affiliateCode, referrerId);
    console.log(
      "New Referral added! \n affiliateCode:",
      affiliateCode,
      "referrerId:",
      referrerId
    );
    console.log(newReferral.status);
  }

  console.log("callback page is running");

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
