import React from "react";
import Select from "react-select";
import "./input-select.scss";

export default function InputSelect(props) {
  const {
    label,
    value,
    name = "",
    selected,
    callbackChange,
    callbackAnother,
    emptyLabel = "Selecione",
    options = [],
    isMulti = false,
    ...rest
  } = props;

  function handleChange(value) {
    let values = [];
    if (Array.isArray(value)) {
      values = value.map((_value) => _value.value);
    } else {
      values = [value.value];
    }
    if (values.includes("Outro") || values.includes("Outra")) {
      callbackAnother && callbackAnother(true);
    } else {
      callbackChange && callbackChange(value);
    }
  }

  return (
    <div className="input-group d-flex">
      {label && <label className="w-100 my-3">{label}</label>}
      <Select
        value={value}
        isMulti={isMulti}
        name={name}
        placeholder="Selecione"
        options={options.map((opt) => {
          return { value: opt, label: opt };
        })}
        className="w-100"
        classNamePrefix="select"
        onChange={handleChange}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: "15px",
          }),
        }}
      />
    </div>
  );
}
