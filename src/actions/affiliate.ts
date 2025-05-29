"use server";

import client from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const verifyAffiliateCode = async (affiliateCode: string) => {
  try {
    const referrer = await client.user.findUnique({
      where: {
        affiliateCode: affiliateCode,
      },
      select: {
        id: true,
      },
    });
    if (!referrer)
      return {
        status: 404,
        message: "Affiliate Code is invalid",
      };

    return {
      status: 200,
      message: "Affiliate code is valid",
      referrer: referrer,
    };
  } catch (error) {
    return {
      status: 500,
      error: error,
      message: "Exception occured try again",
    };
  }
};

// should be called after signup
export const addReferral = async (
  affiliateCode: string,
  referrerId?: string
) => {
  try {
    console.log("addReferral is running");
    const user = await currentUser();
    if (!user) {
      return { status: 401, message: "User not authenticated" };
    }

    const isUser = await client.user.findUnique({
      where: { clerkId: user.id },
      select: { id: true },
    });
    if (!isUser) return { status: 404, message: "User not found in database" };

    const existingReferral = await client.referral.findUnique({
      where: { referredId: isUser.id },
    });
    if (existingReferral) {
      return { status: 409, message: "User has already been referred" };
    }

    const newReferral = await client.referral.create({
      data: {
        code: affiliateCode,
        referredId: referrerId,
        referrerId: isUser.id,
      },
    });

    return {
      status: 200,
      message: "Referral registered",
      referral: newReferral,
    };
  } catch (error) {
    return {
      status: 500,
      error: error,
      message: "Exception occured try again",
    };
  }
};

export const getAffiliateCodeForCurrentUser = async () => {
  const user = await currentUser();
  if (!user) return null;

  const isUser = await client.user.findUnique({
    where: { clerkId: user.id },
    select: { affiliateCode: true },
  });

  return isUser?.affiliateCode ?? null;
};
