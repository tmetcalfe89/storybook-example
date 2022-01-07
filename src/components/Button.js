import React from "react";

function Button({ type = "", label = "" }) {
  const types = {
    primary: {
      bg: "blue",
    },
    secondary: {
      bg: "green",
    },
    _default: {
      bg: "white",
    },
  };

  const { bg } = types[type] || types._default;

  return <button style={{ backgroundColor: bg }}>{label}</button>;
}

export default Button;
