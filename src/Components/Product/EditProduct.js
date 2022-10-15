import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
	let { id } = useParams();
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/product");
	};

	return (
		<div>
			EditProduct {id}
			<button onClick={handleClick}>Go to contact</button>
		</div>
	);
};

export default EditProduct;
