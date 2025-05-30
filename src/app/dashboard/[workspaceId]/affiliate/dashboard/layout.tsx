import { getReferralsCount } from "@/actions/affiliate";
import InvalidReferralPage from "@/components/global/bad-request/InvalidReferralPage";
import React, { ReactElement } from "react";
import AffiliateDashboard from "./page";

type Props = {
  children: ReactElement;
};

const Layout = async ({ children }: Props) => {
  const referralsCount = await getReferralsCount();
  if (referralsCount.status !== 200) {
    <InvalidReferralPage
      message={referralsCount.message ? referralsCount.message : ""}
    />;
  }
  console.log(referralsCount.referralsMadeCount);
  return (
    <AffiliateDashboard referralsCount={referralsCount.referralsMadeCount} />
  );
};

export default Layout;
