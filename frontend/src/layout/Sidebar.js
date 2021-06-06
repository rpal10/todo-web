import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleRight,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

import Projects from "../sample/projects.json";

function Sidebar() {
  const [projects] = useState(Projects);
  const [chevron, setChevron] = useState(false);

  const toggleProjects = () => {
    setChevron(!chevron);
  };

  return (
    <div className="w-40 lg:w-60 h-screen ">
      <div className="grid grid-rows-1 pt-14 ml-6 lg:ml-10">
        <div className="flex w-28 pb-2 text-base lg:text-lg text-green-dark ">
          <h2>Projects</h2>
          <FontAwesomeIcon
            onClick={toggleProjects}
            className="self-center ml-4 cursor-pointer"
            icon={chevron ? faChevronCircleDown : faChevronCircleRight}
          />
        </div>
        {chevron &&
          projects.map((project) => (
            <ul
              key={project.id}
              className="flex pl-4 pt-4 text-base lg:text-lg text-green-dark cursor-pointer"
            >
              <li>
                <button>
                  {project.name}
                  <FontAwesomeIcon
                    className="self-center ml-4 cursor-pointer"
                    icon={faChevronCircleRight}
                  />
                </button>
              </li>
            </ul>
          ))}
      </div>
      <div className="flex ml-6 lg:ml-10 mt-10">
        <button className="self-center text-green-dark text-base lg:text-lg">
          Create project
          <FontAwesomeIcon
            className="self-center ml-2 cursor-pointer"
            icon={faPlusCircle}
          />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
