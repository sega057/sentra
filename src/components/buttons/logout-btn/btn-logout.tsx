import {useAppDispatch} from "../../../hooks/use-app";
import {logout} from "../../../store/user/user.slice";

export const BtnLogout = () => {
	const dispatch = useAppDispatch();
	return <button onClick={() => dispatch(logout())}>
		Logout
	</button>
}