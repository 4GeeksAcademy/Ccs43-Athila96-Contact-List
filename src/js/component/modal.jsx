import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Modal = ({ id, contact_id }) => {
  console.log("esto es: ", contact_id);
  const { store, actions } = useContext(Context);

  const handleDeleteContact = () => {
    actions.ContactsList();
    actions.DeleteContact(contact_id);
  };
  return (
    <React.Fragment>
      {/* Modal */}
      <div
        className="modal fade"
        id={id}
        tabIndex="-1"
        aria-labelledby={`${id}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`${id}Label`}>
                Are you sure?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              If you delete this thing the entire universe will go down!
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Oh no! 😯
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  handleDeleteContact();
                }}
              >
                Yes baby! 😈
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
