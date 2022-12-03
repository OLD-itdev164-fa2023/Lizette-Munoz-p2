import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Hi,I'm Lizette</h2>
          <h3>A full-stack developer</h3>
          <p>looking for a fulltime internship position</p>
          <Link className={styles.btn} to="/projects">
            My Projects
          </Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{ maxWidth: "70%" }} />
      </section>
    </Layout>
  );
}
