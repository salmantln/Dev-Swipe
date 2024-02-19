import KpiCardGrid from "@/dashboard_components/cards/KpiCard";
import { TableUsageExample } from "@/dashboard_components/table/table";

import { useState } from "react";

export default function DashboardPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <header>
      <p className="mb-2 text-sm font-semibold text-cyan-600">
        Statistics
      </p>

      <KpiCardGrid />
      <TableUsageExample />
    </header>
  );
}
