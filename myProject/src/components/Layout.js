/*Layout contains Navbar component. Created Layout Function which
returns the whole website layout. A div container which holds Navbar component at the beginning then a div container followed by brackets which will be used to add the pages content. The a footer tag at the bottom. */

import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="pageContent">{children}</div>
      <footer>
        <p>Copyright 2022 | Lizette Munoz</p>
      </footer>
    </div>
  );
}
