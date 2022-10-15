import React from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
	return (
		<div>
			ProductList
			<Link to="create">Add Product</Link>
			<Link to="561">Edit Product</Link>
		</div>
	);
};

export default ProductList;
