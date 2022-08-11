export interface Contact {
	userId: number;
	firstName: string;
	lastName?: string;
	username?: string;
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
