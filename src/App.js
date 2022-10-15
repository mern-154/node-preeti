import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Counter from "./Components/Counter";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import AddProduct from "./Components/Product/AddProduct";
import EditProduct from "./Components/Product/EditProduct";
import ProductList from "./Components/Product/ProductList";
import CreateTodo from "./Components/Todo/CreateTodo";
import TodoList from "./Components/Todo/TodoList";

import "./app.css";

const App = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="counter" element={<Counter />} />
					<Route path="product">
						<Route index element={<ProductList />} />
						<Route path="create" element={<AddProduct />} />
						<Route path=":id" element={<EditProduct />} />
					</Route>
					<Route path="todo">
						<Route index element={<TodoList />} />
						<Route path="create" element={<CreateTodo />} />
					</Route>
				</Routes>
			</div>
		</>
	);
};

export default App;
