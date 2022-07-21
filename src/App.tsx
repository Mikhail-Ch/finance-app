import React from 'react';
import Sidebar from "./components/sidebar";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "./pages/routes";

function App() {
  const routes = useRoutes(true)

  return (
    <div className="flow-container">
      <BrowserRouter>
        <Sidebar/>
        <div className="content">
          { routes }
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
