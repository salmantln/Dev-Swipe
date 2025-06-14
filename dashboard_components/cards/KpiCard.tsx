"use client";

import { BadgeDelta, Card, DeltaType, Flex, Grid, Metric, ProgressBar, Text } from "@tremor/react";

type Kpi = {
  title: string;
  metric: string;
  progress: number;
  target: string;
  delta: string;
  deltaType: DeltaType;
};

const kpiData: Kpi[] = [
  {
    title: "People Applied",
    metric: "129",
    progress: 15.9,
    target: "800",
    delta: "13.2%",
    deltaType: "moderateIncrease",
  },
  {
    title: "People Rejected",
    metric: "42",
    progress: 36.5,
    target: "70",
    delta: "23.9%",
    deltaType: "increase",
  },
  {
    title: "Viewed job posts",
    metric: "1,072",
    progress: 53.6,
    target: "200",
    delta: "10.1%",
    deltaType: "moderateDecrease",
  },
];

export default function KpiCardGrid() {
  return (
    <Grid numItemsMd={2} numItemsLg={3} className="gap-6">
      {kpiData.map((item) => (
        <Card key={item.title}>
          <Flex alignItems="start">
            <div className="truncate">
              <Text>{item.title}</Text>
              <Metric className="truncate">{item.metric}</Metric>
            </div>
            <BadgeDelta deltaType={item.deltaType}>
              {item.delta}
            </BadgeDelta>
          </Flex>
          <Flex className="mt-4 space-x-2">
            <Text className="truncate">{`${item.progress}% (${item.metric})`}</Text>
            <Text className="truncate">{item.target}</Text>
          </Flex>
          <ProgressBar value={item.progress} className="mt-2" />
        </Card>
      ))}
    </Grid>
  );
}