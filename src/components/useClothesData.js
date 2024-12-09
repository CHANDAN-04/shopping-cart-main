import { useState, useEffect } from "react";
import { goods } from "./demoData";

function useClothesData() {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [newData, setNewData] = useState([]);
	const [totalData, setTotalData] = useState([]);
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		async function fetchClothes() {
			try {
				// Fetch data here, e.g., men's and women's clothing
				let menClothes = goods; // Replace this with fetch logic if needed

				let updatedMen = menClothes.map((x) => ({
					...x,
					count: 1,
				}));

				setTotalData(updatedMen);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		}
		fetchClothes();
	}, []);

	function addOrSub(id, op) {
		let index = totalData.findIndex((d) => d.id === id);
		if (op === "+") {
			let add = [...totalData];
			add[index] = { ...add[index], count: add[index].count + 1 };
			setTotalData(add);
		} else {
			let sub = [...totalData];
			sub[index] = { ...sub[index], count: Math.max(sub[index].count - 1, 1) }; // Prevent count < 1
			setTotalData(sub);
		}
	}

	function handleChange(e, id) {
		let index = totalData.findIndex((item) => item.id === id);
		let shallowData = [...totalData];
		shallowData[index] = {
			...shallowData[index],
			count: Number(e.target.value),
		};
		setTotalData(shallowData);
	}

	function addToCart(item) {
		let index = cartItems.findIndex((x) => x.id === item.id);
		if (index >= 0) {
			let copy = [...cartItems];
			copy[index].count += item.count;
			setCartItems(copy);
		} else {
			setCartItems([...cartItems, item]);
		}
	}

	function addToProduct(item) {
		let newProd = [...totalData, item];
		setTotalData(newProd);
	}
	function sendProductToAdmin(data) {
		let newProduct = [...newData, data];
		setNewData(newProduct);
		console.log(newData);
	}
	function removeAd(id) {
		let filteredAdminItems = newData.filter((item) => item.id !== id);
		setNewData(filteredAdminItems);
	}
	function remove(id) {
		let filteredCartItems = cartItems.filter((item) => item.id !== id);
		setCartItems(filteredCartItems);
	}

	return {
		totalData,
		newData,
		cartItems,
		loading,
		error,
		addOrSub,
		handleChange,
		addToCart,
		sendProductToAdmin,
		remove,
		removeAd,
		addToProduct,
	};
}

export default useClothesData;
