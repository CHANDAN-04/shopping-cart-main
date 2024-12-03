import React from "react";
import styles from "./css/about.module.css"

export default function About() {
  return (
    <div className={styles.about}>
      <h2>This is a fictional store and none of the products displayed here exist.</h2>
      <h3>Products' information and images: Fake Store API.</h3>
      <h3>darshan019: <a target="_blank" href="https://github.com/darshan019">Github</a></h3>
    </div>
  )
}