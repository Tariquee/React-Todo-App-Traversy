import React from "react";

function Header() {
  return (
    <div>
      <h1 style={headerStyle}>My Fucking App</h1>
    </div>
  );
}

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  padding: "10px",
  background: "#333",
};

export default Header;
