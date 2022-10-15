import React, { useState } from "react";

const Main = () => {
	const [isShow, setIsShow] = useState(true);

	// const handleClick = (status) => {
	// 	setIsShow(status);
	// };

	return (
		<>
			{isShow && <h1>Hello World!</h1>}
			{/* {isShow ? (
				<button
					onClick={() => {
						handleClick(false);
					}}
				>
					Hide
				</button>
			) : (
				<button onClick={() => handleClick(true)}>Show</button>
			)} */}

			<button onClick={() => setIsShow(!isShow)}>Toggle</button>
		</>
	);
};

export default Main;
