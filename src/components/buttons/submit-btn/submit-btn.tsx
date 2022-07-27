import React from "react";

export const SubmitBtn: React.FC<{text: string}> = ({text}) => {
	return (
		<input className="btn btn-green" type="submit" value={text}/>
	)
}