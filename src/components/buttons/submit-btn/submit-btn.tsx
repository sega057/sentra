import React from "react";

export const SubmitBtn: React.FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	return (
		<button
			className="hover:shadow-green-500 w-full rounded-xl bg-green-600 px-5 py-3
			font-secondary text-white transition-shadow ease-linear hover:shadow-md"
			type="submit"
		>
			{children}
		</button>
	);
};
