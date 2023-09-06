import React from 'react';
import Authorize from './Authorize';
import './Analytics.scss';
import Chart from './Chart';

const Analytics = () => {
  return (
    <Authorize allowedRoles={['admin']}>
      <div className="analytics">
        <h2>Analytics</h2>
        <Chart />
      </div>
    </Authorize>
  );
};

export default Analytics;
