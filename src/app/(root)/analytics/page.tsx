"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, AlertTriangle, BarChart3, Target } from "lucide-react";
import { aiInsights, returnRatesByCategory, returnReasons } from "./data";
import React from "react";

const COLORS = ["#6366f1", "#ec4899", "#10b981", "#f59e0b"];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    dataKey: string;
    value: number;
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border rounded-lg shadow-md text-sm text-gray-700">
        <p className="font-semibold text-gray-900 mb-1">{label}</p>
        <p>{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Return Analytics Dashboard</h1>
          <p className="text-gray-600">Monitor and analyze return patterns to optimize your business</p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total Returns</p>
                  <p className="text-2xl font-bold">1,247</p>
                </div>
                <BarChart3 className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Overall Return Rate</p>
                  <p className="text-2xl font-bold">12.3%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">This Month</p>
                  <p className="text-2xl font-bold">-2.4%</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Pie Chart - Return Reasons */}
          <Card className="shadow-lg border-0 bg-white">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-indigo-600" />
                <CardTitle className="text-xl font-semibold text-gray-900">Return Reasons</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={returnReasons}
                      dataKey="percentage"
                      nameKey="reason"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      innerRadius={45}
                      paddingAngle={2}
                      label={({ value }) => `${value}%`}
                    >
                      {returnReasons.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Legend */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {returnReasons.map((item, index) => (
                  <div key={item.reason} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-sm text-gray-600">{item.reason}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bar Chart - Return Rate by Category */}
          <Card className="shadow-lg border-0 bg-white">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-indigo-600" />
                <CardTitle className="text-xl font-semibold text-gray-900">
                  Return Rates by Category
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={returnRatesByCategory}
                    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="category"
                      tick={{ fontSize: 12 }}
                      angle={-45}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="rate" fill="url(#colorGradient)" radius={[6, 6, 0, 0]} />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Insights Section */}
        <Card className="shadow-lg border-0 bg-white">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900">AI-Powered Insights</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 animate-marquee hover:pause">
                {aiInsights.map((insight) => {
                  let bg = "";
                  let border = "";
                  let text = "";
                  let Icon = TrendingUp;

                  switch (insight.type) {
                    case "warning":
                      bg = "bg-red-50";
                      border = "border-red-400";
                      text = "text-red-800";
                      Icon = AlertTriangle;
                      break;
                    case "error":
                      bg = "bg-yellow-50";
                      border = "border-yellow-500";
                      text = "text-yellow-800";
                      Icon = AlertTriangle;
                      break;
                    case "info":
                    default:
                      bg = "bg-blue-50";
                      border = "border-blue-400";
                      text = "text-blue-800";
                      Icon = TrendingUp;
                      break;
                  }

                  return (
                    <div
                      key={insight.id}
                      className={`min-w-[300px] p-4 rounded-lg border-l-4 ${bg} ${border} ${text} shadow-sm hover:shadow-md transition-all`}
                    >
                      <div className="flex items-start gap-3">
                        <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <p className="text-sm font-medium leading-relaxed">{insight.message}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
