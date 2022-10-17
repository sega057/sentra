import React from "react";

interface UseInput {
	value: string;
	onChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
	setValue: (val: string) => void;
}

export function useInput(validator?: (val: string) => string): UseInput {
	const [input, setInput] = React.useState("");

	const handleChange = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const { value } = e.target;

			setInput(validator ? validator(value) : value);
		},
		[validator],
	);

	return {
		value: input,
		onChange: handleChange,
		setValue: setInput,
	};
}
