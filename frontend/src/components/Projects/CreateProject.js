import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import Dialog from "./Modals/Create";

function CreateProject() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex ml-6 lg:ml-10 mt-10">
      <button
        className="self-center hover:text-gray-500 text-purple-dark text-sm lg:text-lg"
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        Create project
        <FontAwesomeIcon
          className="self-center ml-2 cursor-pointer"
          icon={faPlusCircle}
        />
      </button>
      <Dialog open={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default CreateProject;
