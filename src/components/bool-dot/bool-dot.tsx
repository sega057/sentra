import React from "react";
import clsx from "clsx";

export const BoolDot: React.FC<{ isValid: null | boolean }> = ({ isValid }) => {
	return (
		<span
			className={clsx(
				"pointer-events-none inline-block h-2.5 w-2.5 rounded-full transition-colors duration-300",
				{
					"bg-green-600": isValid,
					"bg-red-600": isValid === false,
					"bg-gray-300": isValid === null,
				},
			)}
		/>
	);
};
