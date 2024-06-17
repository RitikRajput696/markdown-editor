import React from "react";

function Title({ title, className, children }) {
  return (
    <div className={className}>
      <div>{title}</div>
      {children}
    </div>
  );
}

export default Title;
