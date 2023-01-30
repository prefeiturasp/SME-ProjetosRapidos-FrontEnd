import React from "react";
import Icon from "../icon/Icon";

export default function Modal(props) {
  const { open = false, close, title = "", subtitle = "" } = props;

  function handleClose(ev) {
    ev.preventDefault();
    close();
  }

  return (
    open && (
      <div className="modal d-block modal-backdrop" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <Icon name="check-circle" size="3x" />
              <h6 className="fw-bold">{title}</h6>
              <p>{subtitle}</p>
            </div>
            <div className="modal-footer border-0 d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary btn-radius fw-bold px-5"
                onClick={handleClose}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
