import React from "react";
import styles from "./css/cart.module.css"

export default function Cart({cartItems, remove}) {
  
  return (
    <div className={styles.cart}>
      {cartItems.length > 0 ? 
      
      cartItems.map(item => {
        return (
          <>
            <div  key={item.id} className={styles.card}>
              <img className={styles["card-img"]} src={item.image} alt={item.title} />
              <div className={styles.info}>
                <h3>Price: ${item.price}</h3>
                <h4>Rating: {item.rating.rate}</h4>
                <h4>No. of units: {item.count}</h4>
                <h4>Total Cost: ${(item.count * item.price).toFixed(2)}</h4>
                <button onClick={() => remove(item.id)} className={styles.remove}>REMOVE</button>
              </div>
            </div>
          </>
        )
      }) :
      <h1>NO ITEMS PRESENT IN THE CART</h1>
      }
    </div>
  )
}