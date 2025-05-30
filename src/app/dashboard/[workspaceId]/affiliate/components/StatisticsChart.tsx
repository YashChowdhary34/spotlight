"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartTooltip } from "@/components/ui/chart";

interface StatisticsData {
  day: string;
  sales: number;
  expenses: number;
  profit: number;
}

interface StatisticsChartProps {
  data: StatisticsData[];
}

export function StatisticsChart({ data }: StatisticsChartProps) {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration errors with SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <ChartTooltip>
                  <div className="font-medium">{label}</div>
                  {payload.map((entry, index) => (
                    <div
                      key={`tooltip-${index}`}
                      className="flex items-center gap-2"
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: entry.color }}
                      />
                      <span>
                        {entry.name}: {entry.value}
                      </span>
                    </div>
                  ))}
                </ChartTooltip>
              );
            }
            return null;
          }}
        />
        <Legend
          verticalAlign="bottom"
          height={36}
          iconType="circle"
          iconSize={8}
        />
        <Bar
          dataKey="sales"
          stackId="a"
          fill="#1e8a7a"
          radius={[4, 4, 0, 0]}
          name="Sales"
        />
        <Bar
          dataKey="expenses"
          stackId="a"
          fill="#e5a07e"
          radius={[4, 4, 0, 0]}
          name="Expenses"
        />
        <Bar
          dataKey="profit"
          stackId="a"
          fill="#f8e3c5"
          radius={[4, 4, 0, 0]}
          name="Profit"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
