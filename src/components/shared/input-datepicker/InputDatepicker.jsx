import React from "react";

export default function InputDatepicker(props) {
  const { label, error = null, errorMessage = '', callbackChange, ...rest } = props;

  function handleChange(ev){
    ev.persist();
    callbackChange(ev);
  };

  return (
    <div className="input-group d-flex">
      {label && <label className="w-100 my-3">{label}</label>}
      <div className={`w-100 position-relative ${error && 'mb-3'}`}>
      <input
        type="date"
        className="form-control"
        onChange={handleChange}
        {...rest}
      />
      {error && <span className="w-100 position-absolute text-danger pt-1">{errorMessage}</span>}
      </div>

    </div>
  );
}
