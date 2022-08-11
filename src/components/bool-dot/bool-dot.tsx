import React from "react";
import clsx from "clsx";

interface BoolDotProps {
	isRed: boolean;
	inForm?: true;
	inPassForm?: true;
}

export const BoolDot: React.FC<BoolDotProps> = ({
	isRed,
	inForm,
	inPassForm,
}) => {
	return (
		<span
			className={clsx(
				"pointer-events-none inline-block h-2.5 w-2.5 rounded-full transition-colors duration-300",
				{
					"bg-red-600": isRed,
					"bg-green-500": !isRed,
					"right-5": inForm,
					"right-12": inPassForm,
					"absolute top-1/2 -translate-y-1/2": inForm || inPassForm,
				},
			)}
		/>
	);
};
