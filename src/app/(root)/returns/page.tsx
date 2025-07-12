"use client";

import React, { useState, useMemo } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Package,
  MapPin,
  AlertCircle,
  CheckCircle,
  RotateCcw,
  TrendingUp,
  Filter,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { activeReturns, returnOutcomeData } from "./data";

// Type definitions
type TableComponentProps = {
  children: React.ReactNode;
  className?: string;
};

type TooltipProps = {
  active?: boolean;
  payload?: any;
  label?: string;
};

// Table components
const Table = ({ children, className = "" }: TableComponentProps) => (
  <table className={`w-full ${className}`}>{children}</table>
);
const TableHeader = ({ children }: TableComponentProps) => (
  <thead>{children}</thead>
);
const TableBody = ({ children }: TableComponentProps) => (
  <tbody>{children}</tbody>
);
const TableRow = ({ children, className = "" }: TableComponentProps) => (
  <tr className={className}>{children}</tr>
);
const TableHead = ({ children, className = "" }: TableComponentProps) => (
  <th
    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${className}`}>
    {children}
  </th>
);
const TableCell = ({ children, className = "" }: TableComponentProps) => (
  <td className={`px-6 py-4 whitespace-nowrap ${className}`}>{children}</td>
);

// Utility: Bar color by action name
const BAR_COLORS: Record<string, string> = {
  Restock: "#10b981", // Green
  Repair: "#f59e0b", // Orange
  Resale: "#6366f1", // Indigo
};

const getBarColor = (name: string) => BAR_COLORS[name] || "#6b7280";

// Utility: Icon by action
const getActionIcon = (action: string) => {
  switch (action) {
    case "Repair":
      return <RotateCcw className="h-4 w-4" />;
    case "Restock":
      return <CheckCircle className="h-4 w-4" />;
    case "Resale":
      return <Package className="h-4 w-4" />;
    default:
      return <AlertCircle className="h-4 w-4" />;
  }
};

// Utility: Action badge color
const getActionColor = (action: string) => {
  switch (action) {
    case "Repair":
      return "text-orange-600 bg-orange-50";
    case "Restock":
      return "text-green-600 bg-green-50";
    case "Resale":
      return "text-indigo-600 bg-indigo-50";
    default:
      return "text-gray-600 bg-gray-50";
  }
};

// Utility: Reason color
const getReasonColor = (reason: string) => {
  if (reason.includes("Damaged")) {
    return "text-red-600 bg-red-50";
  } else if (reason.includes("Mistake")) {
    return "text-yellow-600 bg-yellow-50";
  } else {
    return "text-purple-600 bg-purple-50";
  }
};

// Custom tooltip for chart
const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border rounded-lg shadow-lg">
        <p className="font-medium text-gray-900">{label}</p>
        <p className="text-sm text-gray-600">{payload[0].value} returns</p>
      </div>
    );
  }
  return null;
};

// Main Component
const Returns: React.FC = () => {
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedReturns = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return activeReturns.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Returns Management
          </h1>
          <p className="text-gray-600">
            Track and manage product returns efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Table Card */}
          <Card className="lg:col-span-2 shadow-lg border-0 bg-white">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-indigo-600" />
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Active Returns
                  </CardTitle>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead>Return ID</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead>Drop Location</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedReturns.map((item) => (
                      <TableRow
                        key={item.id}
                        className="hover:bg-gray-50 transition-colors">
                        <TableCell className="font-medium text-gray-900">
                          {item.id}
                        </TableCell>
                        <TableCell className="text-gray-700">
                          {item.product}
                        </TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getReasonColor(
                              item.reason
                            )}`}>
                            {item.reason}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getActionColor(
                              item.action
                            )}`}>
                            {getActionIcon(item.action)}
                            {item.action}
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-gray-400" />
                            {item.dropLocation}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="flex justify-between items-center px-6 py-4 border-t bg-gray-50">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="text-sm text-indigo-600 disabled:text-gray-400">
                    Previous
                  </button>

                  <span className="text-sm text-gray-600">
                    Page {currentPage} of{" "}
                    {Math.ceil(activeReturns.length / ITEMS_PER_PAGE)}
                  </span>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) =>
                        prev < Math.ceil(activeReturns.length / ITEMS_PER_PAGE)
                          ? prev + 1
                          : prev
                      )
                    }
                    disabled={
                      currentPage ===
                      Math.ceil(activeReturns.length / ITEMS_PER_PAGE)
                    }
                    className="text-sm text-indigo-600 disabled:text-gray-400">
                    Next
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chart Card */}
          <Card className="shadow-lg border-0 bg-white">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-indigo-600" />
                <CardTitle className="text-xl font-semibold text-gray-900">
                  Return Outcomes
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={returnOutcomeData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 12 }}
                      angle={-45}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                      {returnOutcomeData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={getBarColor(entry.name)}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Summary Stats */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {returnOutcomeData.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: getBarColor(item.name),
                        }}></div>
                      <span className="text-sm font-medium text-gray-700">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Returns;
