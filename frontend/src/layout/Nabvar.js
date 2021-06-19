import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faBars, faAddressBook } from "@fortawesome/free-solid-svg-icons";

import userImg from "../assets/img/userDefault.jpg";

/**
 * ToDO:
 * - User image should be taken from login with GitHub validation.
 * !important: All of the system login validation (login, logout) have to be done with the session same as getting the data
 * from the user
 * - Hamburguer, done know what to implemented there for now its only static
 * - Logo, looking for a better logo
 * @returns
 */

function Nabvar(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex flex-nowrap justify-between bg-purple h-16">
      <div className="self-center">
        <FontAwesomeIcon
          className="text-purple-light ml-4 text-2xl lg:ml-8 cursor-pointer"
          icon={faBars}
          onClick={props.toggleSideBar}
        />
      </div>
      <div className="self-center">
        <FontAwesomeIcon
          className="text-purple-light text-4xl"
          icon={faAddressBook}
        />
      </div>
      <div className="self-center">
        <button
          onClick={() => {
            setDropdownOpen(!dropdownOpen);
          }}
          className="relative z-10 block rounded-md p-2 focus:outline-none"
        >
          <img
            src={userImg}
            alt="profile pic"
            className="rounded-full border-2 border-purple-light w-10 mr-4 lg:mr-8 cursor-pointer"
          />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
            <a
              href="_blank"
              alt="Profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple hover:text-purple-light"
            >
              Profile
            </a>
            <a
              href="_blank"
              alt="Profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple hover:text-purple-light"
            >
              Settings
            </a>
            <a
              href="_blank"
              alt="Profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple hover:text-purple-light"
            >
              Sign Out
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nabvar;
