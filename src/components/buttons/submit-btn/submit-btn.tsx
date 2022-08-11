import React from "react";

export const SubmitBtn: React.FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	return (
		<button
			className="w-full rounded-xl bg-green-400 px-5 py-3 font-secondary
			text-white transition-shadow ease-linear hover:shadow-md hover:shadow-green-500"
			type="submit"
		>
			{children}
		</button>
	);
};
