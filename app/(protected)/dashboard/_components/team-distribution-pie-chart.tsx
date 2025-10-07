"use client";

import { PIPE_CHART_COLORS } from "@/constants";
import { PIPE_CHART_DATA } from "@/constants/data-mockup";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

interface TeamDistributionPieChartProps {
  className?: string;
}

export default function TeamDistributionPieChart({
  className = "h-32 w-full",
}: TeamDistributionPieChartProps) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={200} height={200}>
          <Pie
            data={PIPE_CHART_DATA}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={60}
            fill="#8884d8"
            dataKey="value"
          >
            {PIPE_CHART_DATA.map((entry, index) => (
              <Cell
                key={`cell-${entry.name}`}
                fill={PIPE_CHART_COLORS[index % PIPE_CHART_COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
