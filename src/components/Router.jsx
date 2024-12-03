import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Products from "./Products";
import Container from "./Container";
import useClothesData from "./useClothesData";
import About from "./About";
import Cart from "./Cart";
import Navigation from "./Navigation";
import ErrorPage from "./Error";
import SellProduct from "./SellProduct";

const Router = () => {
	let {
		totalData,
		loading,
		error,
		addOrSub,
		handleChange,
		addToCart,
		cartItems,
		remove,
	} = useClothesData();
	let numOfItems = 0;
	for (let i = 0; i < cartItems.length; i++) {
		numOfItems += cartItems[i].count;
	}

	const router = createBrowserRouter([
		{
			path: "/shopping-cart",
			element: <App children={<Navigation cartItems={numOfItems} />} />,
			children: [
				{ index: true, element: <Container /> },
				{
					path: "products",
					element: (
						<Products
							totalData={totalData}
							loading={loading}
							error={error}
							addOrSub={addOrSub}
							handleChange={handleChange}
							addToCart={addToCart}
						/>
					),
				},
				{ path: "about", element: <About /> },
				{ path: "sell", element: <SellProduct newProduct /> },
				{
					path: "cart",
					element: <Cart cartItems={cartItems} remove={remove} />,
				},
				{ path: "*", element: <ErrorPage /> },
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
