import React from "react";

export const SubmitBtn: React.FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	return (
		<button className="btn big btn-green pointer" type="submit">
			{children}
		</button>
	);
};
