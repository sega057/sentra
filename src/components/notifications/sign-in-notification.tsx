import React from "react";
import { Notification, NotificationType } from "@src/store/notifications/types";
import { useSearchParams } from "react-router-dom";
import { AuthPageNotification } from "@components/notifications/auth-page-notification";

export const SignInNotification = React.memo(() => {
	const [searchParams] = useSearchParams();
	const [notification, setNotification] = React.useState<
		undefined | Notification
	>();

	React.useEffect(() => {
		const type = searchParams.get("notificationType")?.trim();
		const message = searchParams.get("notificationMessage")?.trim();
		function isValidType(type: string): type is NotificationType {
			return type in NotificationType;
		}
		if (!type || !message || !isValidType(type)) {
			return;
		}

		setNotification({ type, message });
	}, [searchParams]);

	if (!notification) {
		return null;
	}
	return (
		<AuthPageNotification
			type={notification.type}
			message={notification.message}
		/>
	);
});

SignInNotification.displayName = "SignInNotification";
