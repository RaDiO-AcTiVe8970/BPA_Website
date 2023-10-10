import React from 'react';
import dynamic from 'next/dynamic'


const _Layout = dynamic(() => import('./admin_layout/_mod_layout'))
const _Title = dynamic(() => import('./admin_layout/_title'))

function Dashboard() {
  return (
    <div>
      <_Title title="Dashboard" />
      <_Layout>
      <h1>Dashboard</h1>
      </_Layout>
    </div>
  );
}

export default Dashboard;