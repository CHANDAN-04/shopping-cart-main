import css from "./css/sell.module.css";
import { v4 as newId } from "uuid";
import { useRef } from "react";
import useClothesData from "./useClothesData";
const SellProduct = () => {
	
	// const [Pcategory, setPcategory] = useState("");
	// const [Pdescription, setPdescription] = useState("");
	// const [Pimage, setPimage] = useState("");
	// const [Pprice, setPprice] = useState("");
	// const [Pname, setPname] = useState("");
	// const [Pquantity, setPquantity] = useState("");
	let Pcategory = useRef();
	let Pdescription = useRef();
	let Pimage = useRef();
	let Pprice = useRef();
	let Pname = useRef();
	let Pquantity = useRef();


	let title;
/******  7ad4b6c7-27f8-4e33-b046-6f58e4c9a092  *******/
	let sellClickHandler = (e) => {


		let id = newId();
		let rating = { count: 0, rate: 0 };
		title = Pname.current.value + " - " + Pquantity.current.value;
		let description = Pdescription.current.value;
		let image = Pimage.current.value;
		let price = Pprice.current.value;
		let category = Pcategory.current.value;
		useClothesData().upDateClothes({
			category: category,
			description: description,
			id: id,
			image: image,
			price: price,
			rating: rating,
			title: title,
		});

		Pname.current.value = "";
		Pquantity.current.value = "";
		Pdescription.current.value = "";
		Pimage.current.value = "";
		Pprice.current.value = "";
		Pcategory.current.value = "";
	};
	return (
		<>
			<div className={`${css.container}`}>
				<form
					className={`${css.sellForm}`}
					onSubmit={(e) => {
						e.preventDefault();
						sellClickHandler();
					}}
				>
					<div className="mb-3">
						<label htmlFor="exampleInputEmail1" className="form-label">
							Product Name
						</label>
						<input
							ref={Pname}
							type="text"
							className={`${css.inputs} form-control`}
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter your Product Name..."
						></input>
					</div>
					<div className="mb-2">
						<label htmlFor="exampleInputEmail1" className="form-label">
							Category Of The Product
						</label>
						<input
							ref={Pcategory}
							type="text"
							className={`${css.inputs} form-control`}
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter your Product Name..."
						></input>
					</div>
					<div className="mb-3 mt-3">
						<div htmlFor="exampleInputPassword1" className="form-label">
							Product description
						</div>
						<textarea
							ref={Pdescription}
							type="password"
							rows="5"
							className={`${css.inputs} form-control`}
							id="exampleInputPassword1"
							placeholder="Enter your Product description..."
						></textarea>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputEmail1" className="form-label">
							Quantity
						</label>
						<input
							ref={Pquantity}
							type="text"
							className={`${css.inputs} form-control`}
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter The Quantity..."
						></input>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputEmail1" className="form-label">
							Image URL
						</label>
						<input
							ref={Pimage}
							type="text"
							className={`${css.inputs} form-control`}
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter Image URL..."
						></input>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputEmail1" className="form-label">
							Product Price
						</label>
						<input
							ref={Pprice}
							type="text"
							className={`${css.inputs} form-control`}
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter Product Price Here..."
						></input>
					</div>
					<div className={css.button}>
						<button type="submit" className="btn btn-primary">
							Sell Product
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default SellProduct;
