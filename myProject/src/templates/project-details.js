import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/project-details.module.css";
import Img from "gatsby-image";

export default function ProjectDetails() {
  return (
    <Layout>
      <div className="{styles.details}">
        <h2>title</h2>
        <h3>stack</h3>
      </div>
    </Layout>
  );
}
