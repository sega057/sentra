import { BoolDot } from "@components/bool-dot/bool-dot";
import React from "react";
import clsx from "clsx";

interface FormBoolDotProps {
	isValid: null | boolean;
	rightClass?: string;
}

export const FormBoolDot: React.FC<FormBoolDotProps> = ({
	isValid,
	rightClass = "right-5",
}) => {
	return (
		<div className={clsx("absolute top-1/2 -translate-y-1/2", rightClass)}>
			<BoolDot isValid={isValid} />
		</div>
	);
};
