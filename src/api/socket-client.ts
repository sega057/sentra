const WEB_SOCKET_URL = "";
const SOCKET_RECONNECTION_DELAY = 10000;

interface SocketAuthData {
	Username: string;
	Authorizer: string;
}

function getSocketUrl(authData: SocketAuthData) {
	const searchParams = new URLSearchParams({ ...authData });
	return `${WEB_SOCKET_URL}?${searchParams.toString()}`;
}

export class SocketClient {
	socket: WebSocket | undefined;
	private readonly listeners: Record<string, Array<(data?: any) => void>>;
	private socketUrl: string | undefined;

	constructor() {
		this.listeners = {};
	}

	setSocketAuthData(authData: SocketAuthData | undefined) {
		this.socketUrl = authData ? getSocketUrl(authData) : undefined;
	}

	connect(onConnect?: () => void) {
		if (!this.socketUrl) {
			return;
		}

		this.socket = new WebSocket(this.socketUrl);

		if (onConnect) {
			this.socket.onopen = onConnect;
		}
		this.setSocketHandlers();
	}

	disconnect(code?: number | undefined, reason?: string | undefined) {
		if (!this.socket) {
			return;
		}

		this.socket.close(code, reason);
		this.socket = undefined;
	}

	emit(eventName: string, data: any) {
		if (!this.socket) {
			return;
		}

		this.socket.send(eventName + data);
	}

	on(eventName: string, func: (data?: any) => void) {
		const eventListeners = this.listeners[eventName];
		if (Array.isArray(eventListeners)) {
			eventListeners.push(func);
		} else {
			this.listeners[eventName] = [func];
		}
	}

	setSocketHandlers() {
		this.setMessageHandler();
		this.setDisconnectHandler();
		this.setErrorHandler();
	}

	private setMessageHandler() {
		if (!this.socket) {
			return;
		}

		this.socket.onmessage = (event) => {
			const { eventName, ...data } = event.data;
			this.listeners[eventName]?.forEach((func) => func(data));
			console.log("Message from server ", event.data);
		};
	}

	private setDisconnectHandler() {
		if (!this.socket) {
			return;
		}

		this.socket.onclose = (event) => {
			console.log("socket closed: ", event);
		};
	}

	private setErrorHandler() {
		// if (!this.socket) {
		// 	return;
		// }
		//
		// this.socket.onerror = (event) => {
		// 	console.log("socket error: ", event);
		// 	this.socket = undefined;
		//
		// 	const interval = setInterval(() => {
		// 		this.connect(() => clearInterval(interval));
		// 	}, SOCKET_RECONNECTION_DELAY);
		//
		// 	this.connect(() => clearInterval(interval));
		// };
	}
}
