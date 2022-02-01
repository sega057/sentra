import React from "react";

export const BtnSubmit: React.FC<{text: string}> = ({text}) => {
	return (
		<input className="btn btn-green" type="submit" value={text}/>
	)
}