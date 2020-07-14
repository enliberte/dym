import React from 'react';
import './App.css';
import {Layout} from 'antd';
import AppHeader from "./components/AppHeader/AppHeader";
import AppContent from "./components/AppContent/AppContent";
import AppFooter from "./components/AppFooter/AppFooter";

function App() {
  return (
      <Layout className="layout app-layout">
          <AppHeader/>
          <AppContent/>
          <AppFooter/>
      </Layout>
  );
}

export default App;
