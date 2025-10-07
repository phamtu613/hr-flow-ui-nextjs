"use client";

import { LINE_CHART_DATA } from "@/constants/data-mockup";
import { ListChecks } from "lucide-react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function SupportTicketsChart() {
  return (
    <div className="border rounded-lg p-6 mt-8">
      <p className="font-bold text-lg flex items-center gap-x-2">
        <ListChecks />
        Support tickets resolved
      </p>
      <div className="h-96 w-full mt-10">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={LINE_CHART_DATA}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Delta"
              stroke="#84cc16"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="Alpha" stroke="#3b82f6" />
            <Line type="monotone" dataKey="Canary" stroke="#f97316" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
