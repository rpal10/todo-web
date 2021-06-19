import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";

function Modal(props) {
  return (
    <>
      {props.open ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center self-center p-4 border-b border-solid border-purple-dark-500 rounded-t">
                  <h1 className="text-2xl font-semibold text-purple-dark">
                    New project
                  </h1>
                </div>
                {/*body*/}
                <div className="flex relative items-center w-max p-14">
                  <form className="flex">
                    <div>
                      <FontAwesomeIcon
                        className="self-center ml-2 mr-2 cursor-pointer text-purple-dark"
                        icon={faProjectDiagram}
                      />
                      <input
                        type="text"
                        className="pl-1 h-10 focus:border-purple-dark self-center border-2 border-solid border-purple-light rounded"
                        placeholder="Nombre"
                      />
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="w-24 text-red-900 font-bold text-base py-2 rounded-full shadow border border-solid border-gray- hover:shadow-lg hover:bg-red-900 hover:text-purple-light mr-1 mb-1"
                    type="button"
                    onClick={() => props.setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="w-24 text-purple-light bg-purple font-bold text-base py-2 rounded-full shadow border border-solid border-purple hover:shadow-lg hover:bg-white hover:text-purple mr-1 mb-1"
                    type="button"
                    onClick={() => props.setShowModal(false)}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Modal;
