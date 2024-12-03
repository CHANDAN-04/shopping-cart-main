import styles from "./css/products.module.css";

export default function Clothes({
	addToCart,
	clothes,
	handleChange,
	addOrSub,
}) {
	return (
		<div className={styles["data"]}>
			{clothes.map((x) => (
				<div key={x.id} className={styles.card}>
					<img className={styles["card-img"]} src={x.image} alt={x.title} />
					<div className={styles.info}>
						<h3>{x.title}</h3>
						<h3>Price: ${x.price}</h3>
						<h4>Rating: {x.rating.rate}</h4>
						<h5>Total units: {x.rating.count}</h5>
						<div className={styles.cart}>
							<button
								onClick={() => addOrSub(x.id, "-")}
								className={styles["num-btn"]}
							>
								-
							</button>
							<input
								onChange={(e) => handleChange(e, x.id)}
								value={x.count}
								type="number"
								name="num-items"
								className={styles["num-items"]}
							/>
							<button
								onClick={() => addOrSub(x.id, "+")}
								className={styles["num-btn"]}
							>
								+
							</button>
						</div>
						<button onClick={() => addToCart(x)} className={styles.add}>
							ADD TO CART
						</button>
					</div>
				</div>
			))}
		</div>
	);
}
