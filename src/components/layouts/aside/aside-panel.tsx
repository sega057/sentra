import { NavLink } from "react-router-dom";
import { NoPhotoIcon, MessageIcon, GearIcon } from "@components/icons";
import { ContactsBookIcon } from "@components/icons/contacts-book-icon";
import { LogoutIcon } from "@components/icons/logout-icon";
import { useAppDispatch } from "@/hooks/use-app";
import { logout } from "@/store/user/user.slice";

export const AsidePanel = () => {
	const dispatch = useAppDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<aside className="flex min-w-max flex-col justify-between bg-theme-reverse px-3 py-8 text-theme">
			<div className="flex flex-col items-center gap-y-5">
				<NoPhotoIcon />
				<NavLink to="/" className="p-1.5">
					{({ isActive }) => (
						<MessageIcon
							strokeClass={
								isActive ? "stroke-green-600" : undefined
							}
						/>
					)}
				</NavLink>
				<NavLink to="/contacts" className="p-1.5">
					{({ isActive }) => (
						<ContactsBookIcon
							fillClass={isActive ? "fill-green-600" : undefined}
						/>
					)}
				</NavLink>
			</div>
			<div className="flex flex-col items-center gap-y-5">
				<NavLink to="/config" className="p-1.5">
					{({ isActive }) => (
						<GearIcon
							fillClass={isActive ? "fill-green-600" : undefined}
						/>
					)}
				</NavLink>
				<button onClick={handleLogout} className="p-1.5">
					<LogoutIcon />
				</button>
			</div>
		</aside>
	);
};
