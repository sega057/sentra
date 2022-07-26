import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import React from "react";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

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

export enum Theme {
    light = "light",
    dark = "dark",
}

export function useTheme(value?: Theme | undefined): void {
    React.useEffect(() => {
        if (typeof value === "string") {
            document.body.dataset.theme = value;
        } else {
            document.body.removeAttribute("data-theme");
        }
    }, [value]);
}