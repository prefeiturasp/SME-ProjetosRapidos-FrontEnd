import React from "react";

export default function Section({children, styleProps ={}, className='', bgColor = ''}) {
  return(
    <div style={{...styleProps, backgroundColor: bgColor}} className={className}>
      <section className="container">
        <div className="mx-md-5 p-3 p-md-5">
          {children}
        </div>
      </section>
    </div>
  );
};
