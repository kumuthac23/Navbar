import React from "react";
import "./Headercomp.css";

function Headercomp() {
  const header = {
    logo: {
      imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
      imageSize: 90,
    },
    navbar: ["link1", "link2", "link3"],
  };

  const links = header.navbar.map((link) => <li>{link}</li>);

  return (
    <div>
      <div className="navbar">
        <img className="logo" src={header.logo.imageUrl} alt={"image"} />
        <ul className="link">{links}</ul>
      </div>
    </div>
  );
}

export default Headercomp;
