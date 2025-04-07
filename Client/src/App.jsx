// App.jsx
import './App.css';
import Layout from './layout/layout';
import React, { useState } from 'react';


const Dashboard = () => <div>This is the Dashboard view.</div>;
const Reports = () => <div>This is the Reports view.</div>;

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const sidebarOptions = [
    { label: "Dashboard", onClick: () => setActiveTab("dashboard") },
    { label: "Reports", onClick: () => setActiveTab("reports") },
  ];

  let content;
  if (activeTab === "dashboard") {
    content = <Dashboard />;
  } else if (activeTab === "reports") {
    content = <Reports />;
  }

  return (
    <main className='app-container'>
      <Layout sidebarOptions={sidebarOptions}>
        {content}
      </Layout>
    </main>
  );
}

export default App;
