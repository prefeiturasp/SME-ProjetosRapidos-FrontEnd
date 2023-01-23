import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";


export default function Modal(props){
  const {open = false, close, title = '', subtitle = ''} = props;

  const [openModal, setOpen] = useState(open);

  useEffect(() => {
    setOpen(open);
  }, [open]);

  function handleClose(ev){
    ev.preventDefault();
    close();
  };

  return (
    <div className="modal" tabIndex="-1" style={{display:`${openModal && 'block'}`}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body text-center">
              <FontAwesomeIcon size="3x" icon={faCheckCircle} className="stretched-link mb-3 text-primary"/>
              <h6 className="fw-bold">{title}</h6>
              <p>{subtitle}</p>
            </div>
            <div className="modal-footer border-0 d-flex justify-content-center">
              <button type="button" className="btn btn-primary btn-radius fw-bold px-5" onClick={handleClose}>Ok</button>
            </div>
          </div>
        </div>
      </div>
  );
}
