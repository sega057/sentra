import React from "react";

type AuthFieldProps = {
	children?: React.ReactNode;
	wrapperClassName?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">;

export const ThemeField: React.FC<AuthFieldProps> = ({
	children,
	wrapperClassName,
	...rest
}) => {
	return (
		<div className={wrapperClassName ? wrapperClassName : "relative mb-8"}>
			<input
				className="theme-autofill w-full rounded-xl bg-primary px-5 py-3 font-secondary
				text-sm text-theme outline-none transition-shadow
				hover:shadow hover:shadow-theme-reverse focus:shadow focus:shadow-theme-reverse"
				{...rest}
			/>
			{children}
		</div>
	);
};
