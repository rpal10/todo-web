import React, { useState } from "react";

import ProjectsSample from "../sample/projects.json";
import ProjectList from "../components/Projects/ProjectsList";
import CreateProject from "../components/Projects/CreateProject";

function Sidebar() {
  const [projects] = useState(ProjectsSample);

  return (
    <div className="w-48 lg:w-60 h-screen">
      <ProjectList projects={projects} />
      <CreateProject />
    </div>
  );
}

export default Sidebar;
