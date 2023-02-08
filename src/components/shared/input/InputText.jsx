import React from "react";
import InputMask from 'react-input-mask';
import "./input.scss";

export default function InputText(props) {
  const { label, mask = '', textarea = false, error = null, errorMessage = '', callbackChange, ...rest } = props;

  const masks = {
    'phone': "(99) 99999-9999"
  }
  function handleChange(ev){
    ev.persist();
    callbackChange(ev);
  };

  function renderInput(){
    return (
      textarea ? (
        <textarea
          type="text"
          className="form-control"
          onChange={handleChange}
          {...rest}
        />
      ) : (
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          {...rest}
        />
      )
    )
  };

  return (
    <div className="input-group d-flex">
      {label && <label className="w-100 my-3">{label}</label>}
      <div className={`w-100 position-relative ${error && 'mb-3'}`}>
      {
        masks[mask] ?  (
          <InputMask
            onChange={handleChange}
            mask={masks[mask] || ''}
            maskChar=" "
            {...rest}>
            {(inputProps) =>
              <input
                type="text"
                className="form-control"
                {...inputProps}
              />
            }
          </InputMask>
        ) : (
          renderInput()
        )
      }
      {error && <span className="w-100 position-absolute text-danger pt-1">{errorMessage}</span>}
      </div>

    </div>
  );
}
