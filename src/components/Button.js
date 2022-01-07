import React from "react";

function Button({ type = "", label = "" }) {
  const types = {
    primary: {
      bg: "blue",
      fg: "white",
    },
    secondary: {
      bg: "green",
      fg: "white",
    },
    _default: {
      bg: "white",
      fg: "black",
    },
  };

  const { bg, fg } = types[type] || types._default;

  return <button style={{ backgroundColor: bg, color: fg }}>{label}</button>;
}

export default Button;
