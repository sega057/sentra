import React from "react";

interface UseInput {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    setValue: (val: string) => void;
}

export function useInput(validator?: (val: string) => string): UseInput {
    const [input, setInput] = React.useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {value} = e.target;

        if (validator) {
            setInput(validator(value));
        } else {
            setInput(value)
        }
    }

    return {
        value: input,
        onChange: handleChange,
        setValue: setInput,
    }
}