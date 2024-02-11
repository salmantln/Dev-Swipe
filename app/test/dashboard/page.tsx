"use client";
import KpiCardGrid from "@/dashboard_components/cards/KpiCard";
import { TableUsageExample } from "@/dashboard_components/table/table";

import {
  Title,
  Tab,
  Text,
  TabGroup,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Card,
} from "@tremor/react";
import React, { useState } from "react";

export default function DashboardPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <header>
      <p className="mb-2 text-sm font-semibold text-blue-600">
        Starter Pages & Examples
      </p>

      <KpiCardGrid />
      <TableUsageExample />
    </header>
  );
}
