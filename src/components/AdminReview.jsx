import React from "react";
import styles from "./css/cart.module.css";
import { useId } from "react";

export default function AdminReview({ addToProduct, newData, removeAd }) {
	const sellClickHandler = (item) => {
		console.log(item);
		addToProduct(item);
		removeAd(item.id);
	};
	return (
		<div className={styles.cart}>
			{newData.length > 0 ? (
				newData.map((item) => {
					return (
						<>
							<div key={useId()} className={styles.card}>
								<img
									className={styles["card-img"]}
									src={item.image}
									alt={item.title}
								/>
								<div className={styles.info}>
									<h3>Price: ${item.price}</h3>
									<h4>Rating: {item.rating.rate}</h4>
									<h4>No. of units: {item.count}</h4>
									<h4>Total Cost: ${(item.count * item.price).toFixed(2)}</h4>
									<button
										onClick={(e) => {
											sellClickHandler(item);
										}}
										className={styles.remove}
									>
										SELL
									</button>
								</div>
							</div>
						</>
					);
				})
			) : (
				<h1>NO ITEMS PRESENT</h1>
			)}
		</div>
	);
}
