import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

function Projects(props) {
  const { projects } = props;
  const [chevron, setChevron] = useState(false);

  const toggleProjects = () => {
    setChevron(!chevron);
  };

  return (
    <div className="grid grid-rows-1 pt-14 ml-6 lg:ml-10">
      <div className="flex hover:text-gray-500 w-28 pb-2 text-sm lg:text-lg text-purple-dark ">
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
            className="flex pl-4 pt-4 hover:text-gray-500 text-sm lg:text-lg text-purple-dark cursor-pointer"
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
  );
}

export default Projects;
