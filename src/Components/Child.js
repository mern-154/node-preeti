import React from "react";

const Child = ({ age, name, setAge }) => {
	return (
		<>
			<div>Name: {name}</div>
			<div>Age : {age}</div>
			<button onClick={() => setAge(25)}>Set age as 25</button>
		</>
	);
};

export default Child;
