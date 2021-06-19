import React, { useState } from "react";

import Sidebar from "../layout/Sidebar";
import NavBar from "../layout/Nabvar";

function Dashboard() {
  const [sidebar, SetSidebar] = useState(true);

  const toggleSidebar = () => {
    SetSidebar(!sidebar);
  };

  return (
    <div>
      <NavBar toggleSideBar={toggleSidebar} />

      <div className="flex">
        {sidebar && <Sidebar />}
        <h2 className="float-right bg-purple-light w-screen">dashboard</h2>
      </div>
    </div>
  );
}

export default Dashboard;
