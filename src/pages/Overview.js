import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import HorizontalDivider from "../components/HorizontalDivider";
import VerticalDivider from "../components/VerticalDivider";
import TaskCard from "../components/TaskCard";
import LineChart from "../components/LineChart";

const Overview = () => {
  return (
    <>
      <Header activeTab="Overview" />
      <div className="overview-wrapper">
        <div className="row">
          <div className="d-flex gap-40">
            <Card title="Unresolved" value={60} />
            <Card title="Overdue" value={16} />
            <Card title="Open" value={43} />
            <Card title="On hold" value={64} />
          </div>
        </div>
      </div>
      <div className="sheet-wrapper">
        <div className="row">
          <div className="col-12 d-flex chart">
            <div className="chart-card">
              <div className="trend-title d-flex justify-content-between p-4">
                <div className="p-2">
                  <h3>Today's trends</h3>
                  <p>as of 25 May 2019, 09:41 PM</p>
                </div>
                <div className="d-flex align-items-center gap-30">
                  <div className="d-flex align-items-center gap-12 present-trend">
                    <HorizontalDivider width="15" />
                    <span>Today</span>
                  </div>
                  <div className="d-flex align-items-center gap-12 past-trend">
                    <HorizontalDivider width="15" />
                    <span>Yesterday</span>
                  </div>
                </div>
              </div>
              <div className="trend-chart">
                <LineChart />
              </div>
            </div>
            <VerticalDivider height="100" />
            <div className="chart-data">
              <Card title="Resolved" value="449" />
              <HorizontalDivider width="100" />
              <Card title="Received" value="426" />
              <HorizontalDivider width="100" />
              <Card title="Average first response time" value="33m" />
              <HorizontalDivider width="100" />
              <Card title="Average response time" value="3h 8m" />
              <HorizontalDivider width="100" />
              <Card title="Resolution within SLA" value="94%" />
            </div>
          </div>
        </div>
      </div>
      <div className="summary-wrapper">
        <div className="row gap-40">
          <TaskCard />
          <TaskCard />
        </div>
      </div>
    </>
  );
};

export default Overview;
