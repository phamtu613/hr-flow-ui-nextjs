"use client";

import { BAR_CHART_DATA } from "@/constants/data-mockup";
import { CustomLegendProps } from "@/types";
import { Laptop } from "lucide-react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomLegend = ({ payload }: CustomLegendProps) => {
  if (!payload) return null;

  return (
    <div className="flex justify-center gap-6 mt-4">
      {payload.map((entry, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm text-gray-600">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function EmployeeWorkLocationChart() {
  return (
    <div className="border rounded-lg p-6 mt-8">
      <p className="font-bold text-lg flex items-center gap-x-2">
        <Laptop /> Employee work location trends
      </p>
      <div className="h-96 w-full mt-10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={BAR_CHART_DATA}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend content={<CustomLegend />} />
            <Bar dataKey="Work from office" stackId="a" fill="#8884d8" />
            <Bar dataKey="Work from home" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
