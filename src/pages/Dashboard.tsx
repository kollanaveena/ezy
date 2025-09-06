import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  TrendingDown,
  FileText,
  IndianRupee,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Upload,
  Eye,
} from "lucide-react";

const Dashboard = () => {
  // Mock data - in production, this would come from your API
  const metrics = {
    totalInvoices: 156,
    totalGST: 45680,
    cgst: 22840,
    sgst: 22840,
    igst: 0,
    pendingInvoices: 12,
    monthlyGrowth: 8.5,
  };

  const recentActivities = [
    {
      id: 1,
      type: "success",
      message: "Invoice INV-2024-001 submitted successfully",
      time: "2 minutes ago",
    },
    {
      id: 2,
      type: "pending",
      message: "Invoice INV-2024-002 pending review",
      time: "15 minutes ago",
    },
    {
      id: 3,
      type: "error",
      message: "GST validation failed for INV-2024-003",
      time: "1 hour ago",
    },
    {
      id: 4,
      type: "success",
      message: "Monthly GSTR-1 report generated",
      time: "2 hours ago",
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6 bg-slate-50 min-h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back! Here's your invoicing overview.
          </p>
        </div>
        <div className="flex gap-3">
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            New Invoice
          </Button>
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Upload Invoice
          </Button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="metric-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Invoices
            </CardTitle>
            <FileText className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {metrics.totalInvoices}
            </div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />+{metrics.monthlyGrowth}%
              from last month
            </div>
          </CardContent>
        </Card>

        <Card className="metric-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total GST
            </CardTitle>
            <IndianRupee className="h-5 w-5 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              ₹{metrics.totalGST.toLocaleString()}
            </div>
            <div className="flex gap-2 mt-2">
              <Badge variant="outline" className="text-xs">
                CGST: ₹{metrics.cgst.toLocaleString()}
              </Badge>
              <Badge variant="outline" className="text-xs">
                SGST: ₹{metrics.sgst.toLocaleString()}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="metric-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Pending Invoices
            </CardTitle>
            <Clock className="h-5 w-5 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {metrics.pendingInvoices}
            </div>
            <p className="text-xs text-gray-600 mt-1">Awaiting submission</p>
          </CardContent>
        </Card>

        <Card className="metric-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              This Month
            </CardTitle>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">₹2,45,680</div>
            <p className="text-xs text-gray-600 mt-1">Total invoicing value</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* GST Trends Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">GST Trends</CardTitle>
            <CardDescription>
              Monthly CGST, SGST, and IGST values
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-gray-600">
                  Chart visualization will be implemented
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Integration with Chart.js or Recharts recommended
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Recent Activities
            </CardTitle>
            <CardDescription>Latest invoice and system updates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                {getActivityIcon(activity.type)}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 leading-tight">
                    {activity.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
            <Button variant="ghost" className="w-full mt-4">
              <Eye className="h-4 w-4 mr-2" />
              View All Activities
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Daily Invoicing Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Daily Invoicing Trends
          </CardTitle>
          <CardDescription>
            Invoice values and counts over the past 30 days
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-lg">
            <div className="text-center">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-gray-600">
                Daily trends chart will be implemented
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Shows invoice count and total value per day
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
