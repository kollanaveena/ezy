import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart3,
  Download,
  FileText,
  Calendar,
  TrendingUp,
  IndianRupee,
} from "lucide-react";

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("current-month");
  const [selectedReport, setSelectedReport] = useState("gstr1");

  // Mock report data
  const reportData = {
    gstr1: {
      title: "GSTR-1 Report",
      description: "Outward supplies of taxable goods and services",
      totalInvoices: 156,
      totalTaxableValue: 2450000,
      totalTax: 441000,
      cgst: 220500,
      sgst: 220500,
      igst: 0,
      status: "ready",
      lastGenerated: "2024-01-15",
    },
    gstr2: {
      title: "GSTR-2 Report",
      description: "Inward supplies of taxable goods and services",
      totalInvoices: 89,
      totalTaxableValue: 1250000,
      totalTax: 225000,
      cgst: 112500,
      sgst: 112500,
      igst: 0,
      status: "pending",
      lastGenerated: "2024-01-10",
    },
  };

  const currentReport = reportData[selectedReport as keyof typeof reportData];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ready":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Ready
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            Pending
          </Badge>
        );
      case "processing":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            Processing
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6 bg-slate-50 min-h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600 mt-1">
            Generate and download GST compliance reports
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Download className="h-4 w-4 mr-2" />
          Download Report
        </Button>
      </div>

      {/* Report Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Select Report Type
                </label>
                <Select
                  value={selectedReport}
                  onValueChange={setSelectedReport}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose report type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gstr1">
                      GSTR-1 (Outward Supplies)
                    </SelectItem>
                    <SelectItem value="gstr2">
                      GSTR-2 (Inward Supplies)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Select Period
                </label>
                <Select
                  value={selectedPeriod}
                  onValueChange={setSelectedPeriod}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="current-month">Current Month</SelectItem>
                    <SelectItem value="last-month">Last Month</SelectItem>
                    <SelectItem value="current-quarter">
                      Current Quarter
                    </SelectItem>
                    <SelectItem value="last-quarter">Last Quarter</SelectItem>
                    <SelectItem value="current-year">Current Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Report Status
                </span>
                {getStatusBadge(currentReport.status)}
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                Last Generated:{" "}
                {new Date(currentReport.lastGenerated).toLocaleDateString()}
              </div>

              <Button
                variant="outline"
                className="w-full"
                disabled={currentReport.status !== "ready"}
              >
                <FileText className="h-4 w-4 mr-2" />
                Generate New Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Report Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            {currentReport.title}
          </CardTitle>
          <CardDescription>{currentReport.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Total Invoices
                </span>
                <FileText className="h-4 w-4 text-primary" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {currentReport.totalInvoices}
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Taxable Value
                </span>
                <IndianRupee className="h-4 w-4 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                ₹{(currentReport.totalTaxableValue / 100000).toFixed(1)}L
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Total Tax
                </span>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                ₹{(currentReport.totalTax / 100000).toFixed(1)}L
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Tax Rate
                </span>
                <BarChart3 className="h-4 w-4 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {(
                  (currentReport.totalTax / currentReport.totalTaxableValue) *
                  100
                ).toFixed(1)}
                %
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tax Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Tax Breakdown</CardTitle>
          <CardDescription>
            Detailed breakdown of GST components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">
                ₹{(currentReport.cgst / 1000).toFixed(0)}K
              </div>
              <div className="text-sm font-medium text-gray-700">CGST</div>
              <div className="text-xs text-gray-500 mt-1">Central GST</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                ₹{(currentReport.sgst / 1000).toFixed(0)}K
              </div>
              <div className="text-sm font-medium text-gray-700">SGST</div>
              <div className="text-xs text-gray-500 mt-1">State GST</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                ₹{(currentReport.igst / 1000).toFixed(0)}K
              </div>
              <div className="text-sm font-medium text-gray-700">IGST</div>
              <div className="text-xs text-gray-500 mt-1">Integrated GST</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Download Options */}
      <Card>
        <CardHeader>
          <CardTitle>Download Options</CardTitle>
          <CardDescription>
            Export your reports in different formats
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Download className="h-6 w-6" />
              <span>Excel Format</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <FileText className="h-6 w-6" />
              <span>PDF Report</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <BarChart3 className="h-6 w-6" />
              <span>CSV Data</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
