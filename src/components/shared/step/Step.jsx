import React from "react";
import Icon from "../icon/Icon";
import "./step.scss";

export default function Step({ steps = [], currentStep }) {
  const renderStepItem = ({ title, key }) => {
    return (
      <React.Fragment key={key}>
        <div className="text-center">
          {key < currentStep ? (
            <Icon name="check-circle" color="green" />
          ) : (
            <span className="text-default">{key}</span>
          )}

          <h6 className="w-100 mt-2 fw-bold">{title}</h6>
        </div>
        <hr width="100%" />
      </React.Fragment>
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
