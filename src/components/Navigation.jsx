import styles from "./css/navigation.module.css";
import { Link } from "react-router-dom";

export default function Navigation({ cartItems = 0 }) {
	return (
		<header className={styles.head}>
			<h1>Arya Setu</h1>
			<nav className={styles.navigate}>
				<ul>
					<li>
						<Link to="/shopping-cart">Home</Link>
					</li>
					<li>
						<Link to="/shopping-cart/products">Products</Link>
					</li>
					<li>
						<Link to="/shopping-cart/about">About</Link>
					</li>
					<li>
						<Link to="/shopping-cart/sell">Sell</Link>
					</li>
					<li>
						<Link to="/shopping-cart/cart">
							Cart [{cartItems < 100 ? cartItems : "99+"}]
						</Link>
					</li>
					<li>
						<Link to="/shopping-cart/adminReview">admin</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
