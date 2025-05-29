import { getAffiliateCodeForCurrentUser } from "@/actions/affiliate";
import InvalidReferralPage from "@/components/global/bad-request/InvalidReferralPage";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";
import React from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const Affiliate = async () => {
  const userAffiliateCode = await getAffiliateCodeForCurrentUser();
  if (!userAffiliateCode)
    return (
      <InvalidReferralPage message="Can't get your affiliate code at the moment" />
    );
  const userAffiliateLink = `/affiliates/${userAffiliateCode}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(userAffiliateLink);
      toast.success("Successfully copied!");
    } catch (_) {
      toast.error("Couldn't copy, try again!");
    }
  };

  console.log(
    userAffiliateCode,
    "<- user affiliate code coming from /dashboard/[workspaceid]/affiliate/page.tsx"
  );
  return (
    <main className="fixed top-0 w-full mt-16 h-screen md:mt-0 md:ml-64 flex-grow">
      <div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
      <div className="min-h-screen flex items-start p-6">
        <Card className="w-full max-w-md bg-zinc-800 border-zinc-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold">
              Your Affiliate Link
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Create and share your invitation link
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative group">
              <div className="flex items-center space-x-2">
                <Input
                  value={userAffiliateLink}
                  readOnly
                  className="bg-zinc-700 border-zinc-700 text-zinc-300 pr-16"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 h-full px-3 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                  onClick={copyToClipboard}
                >
                  <Copy className="h-4 w-4 mr-2" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Affiliate;
