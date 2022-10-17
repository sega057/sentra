export enum NotificationType {
	success = "success",
	error = "error",
	default = "default",
}

export interface Notification {
	type: NotificationType;
	message: string;
}
