import React from "react";
import "./input-select.scss";

export default function InputSelect(props) {
  const { label, value, selected, callbackChange, emptyLabel = 'Selecione', options = [], ...rest } = props;

  function handleChange(ev){
    ev.persist();
    callbackChange(ev);
  };

  return (
    <div className="input-group d-flex">
      {label && <label className="w-100 my-3">{label}</label>}
      <select
        {...rest}
        className='form-select'
      >
        <option value="">{emptyLabel}</option>
        {options.map((opt, index) => {
          return (
            <option selected={selected === opt} key={index} value={opt}>
              {opt}
            </option>
          );
        })}
      </select>
    </div>
  );
}
