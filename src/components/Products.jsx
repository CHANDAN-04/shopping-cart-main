import React from "react";
import { useState, useEffect } from "react";
import styles from "./css/products.module.css";
import Clothes from "./Clothes";

export default function Products({totalData, loading, error, addOrSub, handleChange, addToCart}) {
  
  if(error) return <h1>Error</h1>
  
  if(loading) return <h1 style={{textAlign: "center"}}>Loading...</h1>

  return (
    <div className={styles.products}>
      <h1 style={{marginTop: "7px"}}>Welcome to Store</h1>
      <hr style={{width: "60%", color: "black", marginTop: "7px"}} />
      <Clothes 
        handleChange={handleChange} 
        addOrSub={addOrSub} 
        addToCart={addToCart} 
        clothes={totalData} 
      />
    </div>

  )
}