import {useAppDispatch} from "../app/hooks";
import {logout} from "../features/user/user-slice";

export const BtnLogout = () => {
	const dispatch = useAppDispatch();
	return <button onClick={() => dispatch(logout())}>
		Logout
	</button>
}