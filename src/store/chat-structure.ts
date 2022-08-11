interface Contact {
	userId: number;
	firstName: string;
	lastName?: string;
	username?: string;
	photo?: Array<PhotoSize>;
	bio?: string;
}

interface Message {
	id: number;
	fromId: number; // or from: User
	chatId: number;
	date: number; // Unix time
	text: string;
}

enum ChatTypes {
	private = "private",
}

interface Chat {
	id: number;
	type: ChatTypes;
	lastUpdated?: number; // to range chats in list
	userId: number; // for private chats
}

interface PhotoSize {
	fileId: string;
	width: number;
	height: number;
	src: string;
	fileSize?: number; // in bytes
}

export {};
