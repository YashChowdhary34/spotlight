"use client";
import { Button } from "@/components/ui/button";
import { DashboardData } from "@/types/index.types";
import React, { useState } from "react";
import MetricCard from "../components/MetricCard";
import { Card } from "@/components/ui/card";
import { DateRangePicker } from "../components/DataRangePicker";

type DashboardProps = {
  // data: DashboardData;
  referralsCount: number;
};

const AffiliateDashboard = ({ referralsCount }: DashboardProps) => {
  const [dateRange, setDateRange] = useState("last 7 days");
  const data = null;

  //fallback values if data is not available
  const fallbackData: DashboardData = {
    metrics: {
      clients: { value: "N/A", percentage: 0, trend: "up" },
      clientProfits: { value: "N/A", percentage: 0, trend: "up" },
      affiliateEarnings: { value: "N/A", percentage: 0, trend: "up" },
    },
    statistics: {
      dateRange: "No date range",
      data: [],
    },
    analytics: {
      dateRange: "No date range",
      metrics: {
        deposit: 0,
        withdraw: 0,
      },
      data: [],
      tooltip: { value: 0, date: "No date" },
    },
    card: {
      affiliateCode: "N/A",
      type: "Unknown",
      holder: "Card Holder",
      balance: 0,
    },
    myEarnings: {
      total: 0,
      currentWeek: { value: 0, percentage: 0, trend: "up" },
      lastWeek: { value: 0, percentage: 0, trend: "up" },
    },
  };

  const dashboardData = data || fallbackData;

  return (
    <main className="fixed top-0 w-full md:max-w-screen-sm mt-16 h-screen md:mt-0 md:ml-64 flex-grow">
      <div className="container mx-auto max-w-screen-lg p-4 space-y-6">
        <h1 className="text-xl font-bold">Overview</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            {dateRange}
          </Button>
        </div>

        {/*Metrics Cards*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MetricCard
            title="Clients"
            value={`${referralsCount}`}
            percentage={dashboardData.metrics.clients.percentage}
            trend={`${dashboardData.metrics.clients.trend}`}
          />
          <MetricCard
            title="Client Profits"
            value={`${dashboardData.metrics.clientProfits.value}`}
            percentage={dashboardData.metrics.clientProfits.percentage}
            trend={`${dashboardData.metrics.clientProfits.trend}`}
          />
          <MetricCard
            title="Affiliate Earnings"
            value={`${dashboardData.metrics.clientProfits.value}`}
            percentage={dashboardData.metrics.clientProfits.percentage}
            trend={`${dashboardData.metrics.clientProfits.trend}`}
          />
        </div>

        {/*Charts Section*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Statistics</h2>
              <DateRangePicker value={dashboardData.statistics.dateRange} />
            </div>
            <div className="h-[300px]"></div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default AffiliateDashboard;
