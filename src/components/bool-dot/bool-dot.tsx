import React from "react";
import "./bool-dot.scss";

export const BoolDot: React.FC<{ isRed: boolean }> = ({ isRed }) => {
	return <span className={`bool-dot${isRed ? " red" : ""}`} />;
};
