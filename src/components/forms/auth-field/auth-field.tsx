import React from "react";

type AuthFieldProps = {
	children?: React.ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">;

export const AuthField: React.FC<AuthFieldProps> = ({ children, ...rest }) => {
	return (
		<div className="relative mb-8">
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
