import clsx from "clsx";
import { Notification, NotificationType } from "@src/store/notifications/types";
import React from "react";

export const AuthPageNotification: React.FC<Notification> = ({
	type,
	message,
}) => {
	return (
		<p
			className={clsx("mb-7 rounded-md border p-2 text-sky-800", {
				"border-green-300 bg-green-200":
					type === NotificationType.success,
				"border-red-300 bg-red-100": type === NotificationType.error,
				"border-gray-300 bg-gray-100":
					type === NotificationType.default,
			})}
		>
			{message}
		</p>
	);
};
