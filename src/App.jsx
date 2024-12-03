import "./App.css";
import { Outlet } from "react-router-dom";
import SellProduct from "./components/SellProduct";
import "bootstrap/dist/css/bootstrap.min.css";

function App({ children }) {
	return (
		<>
			{children}
			<Outlet />
		</>
	);
}

export default App;
