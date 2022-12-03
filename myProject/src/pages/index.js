import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3> titles</h3>
          <p>My paragraph </p>
          <Link className={styles.btn} to="/projects">
            {" "}
            My Projects{" "}
          </Link>
        </div>
      </section>
    </Layout>
  );
}
