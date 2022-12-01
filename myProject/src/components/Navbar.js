import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <nav>
      <h1>LOGO</h1>
      <div className="myLinks">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
}
