export interface User {
	userId: number;
	username: string;
	firstName: string;
	lastName?: string;
	photo?: Array<PhotoSize>;
	bio?: string;
}

export interface PhotoSize {
	fileId: string;
	width: number;
	height: number;
	src: string;
	fileSize?: number; // in bytes
}
