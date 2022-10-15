import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../Config/Api";
import AxiosAPI from "../../Helpers/AxiosAPI";

const TodoList = () => {
	//store data in state
	let [todos, setTodos] = useState([]);	
	useEffect(() => {
		fetch(`${BASE_URL}/todo/create`)
			.then((response) => response.json())
			.then((res) => {
				setTodos(res);
			});
		getTodos();
	}, 
[]);
// const appearAction  =() =>{ 


// 	useEffect(()=>{
// 		fetch(`${BASE_URL}/todo/create`)
// 		.then((response) => response.json())
// 		.then((res) => {
// 			setTodos(res);
// 		});
// 	getTodos();
// } ,
// []);

	const deleteTodo = (id) => {
		AxiosAPI.delete(`${BASE_URL}/todos/${id}`);
		getTodos();
	};

	const changeStatus = (todo) => {
		AxiosAPI.put(`${BASE_URL}/todos/${todo.id}`, { ...todo, status: "Completed" });
		getTodos();
	};

	const getTodos = (todo) => {
		AxiosAPI.get(`${BASE_URL}/todo`)
			.then((res) => setTodos(res))
			.catch((err) => console.log("Err: ", err));
	};




	return (
		<>
			<div className="row">
				<div className="col-10 mx-auto">
					<div className="h2 my-3">
						<span>Todo List</span>
						{/* added here  create to list*/}
						<button onClick={() => window.location.reload()} className="btn btn-outline-warning float-end ms-3">
							<i className="fa-solid fa-rotate"></i>
						</button>
						<Link to="/todo/create" className="btn btn-outline-primary float-end">
							<i className="fa-regular fa-calendar-plus"></i>
						</Link>
					</div>
					<div className="card shadow">
						<div className="card-body p-0">
							<table className="table border m-0">
								<thead className="table-secondary">
									<tr>
										<th>#</th>
										<th>Task</th>
										<th style={{ width: "115px" }}>Date & Time</th>
										<th>Status</th>
										<th style={{ width: "150px" }} className="text-center">
											Actions
										</th>
									</tr>
								</thead>
								<tbody >
									{todos.length> 0 ? (
										todos.map((todo, i) => (
											<tr className=" align-middle" key={i}>
												<th>{todo.id}</th>
												<td>{todo.task}</td>
												<td>{todo.date}</td>
												{/* these must appear after hover */}
												<td>
													<span className={todo.status === "Completed" ? "badge rounded-pill text-bg-primary px-3 py-2" : "badge rounded-pill text-bg-warning px-3 py-2"}>{todo.status}</span>
												</td>
												{/* here,should appear when hover over the list */}
												<td className="text-center">
													<span className="cursor p-2" onClick={() => getTodos(todo)}>
														<i className="fa-solid fa-pen-to-square text-warning"></i>
													</span>
													{todo.status === "In Progress" && (
														<>
															<span className="cursor p-2" onClick={() => changeStatus(todo)}>
																<i className="fa-solid fa-check text-info"></i>
															</span>
															<span className="cursor p-2" onClick={() => deleteTodo(todo.id)}>
																<i className="fa-solid fa-trash text-danger"></i>
															</span>
														</>
													)}
													</td>
												{/* till here */}
											</tr>
										))
									) : (
										<tr>
											<th className="text-center" colSpan={10}>
												No todos found!
											</th>
										</tr>
									)}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TodoList;