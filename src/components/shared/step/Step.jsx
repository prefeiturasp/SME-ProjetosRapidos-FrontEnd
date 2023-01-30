import React from "react";
import Icon from "../icon/Icon";
import "./step.scss";

export default function Step({ steps = [] }) {
  const renderStepItem = ({ title, current = false }) => {
    return (
      <>
        <div className="text-center">
          <Icon name={current ? "check-circle" : "circle"} />
          <h6 className="w-100 mt-2 fw-bold">{title}</h6>
        </div>
        <hr width="100%" />
      </>
    );
  };
  return (
    <div className="step mb-3 d-flex justify-content-around">
      {steps.map((_step) => {
        return renderStepItem(_step);
      })}
    </div>
  );
}
