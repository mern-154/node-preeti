import React, { useEffect, useState } from "react";

const Counter = () => {
	let [count, setCount] = useState(5);
	let [first, setfirst] = useState(0);

	useEffect(() => {
		console.log("first", first, count);
	});

	return (
		<>
			<button
				onClick={() => {
					setCount(--count);
					setfirst(++first);
				}}
			>
				-
			</button>
			<span className="h2 mx-5">{count}</span>
			<button onClick={() => setCount(++count)}>+</button>
		</>
	);
};

export default Counter;
