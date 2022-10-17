import React from "react";
import clsx from "clsx";

type AuthFieldProps = {
	children?: React.ReactNode;
	wrapperClassName?: string;
	paddingRight?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">;

export const ThemeField: React.FC<AuthFieldProps> = ({
	children,
	wrapperClassName,
	paddingRight,
	...rest
}) => {
	return (
		<div className={wrapperClassName ? wrapperClassName : "relative mb-8"}>
			<input
				// TODO make hover, active
				className={clsx(
					"theme-autofill w-full rounded-xl bg-sky-800 py-3 pl-5 font-secondary text-sm text-white outline-none transition-shadow",
					paddingRight ?? "pr-5",
				)}
				// hover:shadow hover:shadow-theme-dark focus:shadow focus:shadow-theme-dark"
				{...rest}
			/>
			{children}
		</div>
	);
};
