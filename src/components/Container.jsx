import React from "react"
import styles from "./css/container.module.css"
import { Link } from "react-router-dom"

export default function Container() {
  return (
    <div className={styles.parent}>
      <div className={styles["shop-div"]}>
          <h1>Welcome to CoolClothes!</h1>
          <h2>CoolClothes is your one-stop destination for fashion-forward clothing for both men and women. Step into a world of endless possibilities and let us redefine your shopping journey.</h2>
          <div className={styles.shopBtnDiv}>
          <Link to="products" id={styles["shop-now"]}>SHOP NOW</Link>
          </div>
      </div>
    </div>
  )
}