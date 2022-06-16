import React from "react";
import { useForm } from "./useForm";

const App = () => {
	const [values, handleChange] = useForm({ firstName: "", lastName: "" });
	// const [values2, handleChange2] = useForm({ firstName: "", lastName: "" });

	return (
		<div>
			<>
				<input name="firstName" value={values.firstName} onChange={handleChange} />
				<input name="lastName" value={values.lastName} onChange={handleChange} />
				{values.firstName !== "" || values.lastName !== "" ? (
					<div>
						<span>
							Hello {values.firstName} {values.lastName}!
						</span>
					</div>
				) : null}
			</>
		</div>
	);
};

export default App;
