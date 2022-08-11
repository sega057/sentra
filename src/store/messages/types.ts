export interface Message {
	id: number;
	fromId: number; // or from: User
	chatId: number;
	date: number; // Unix time
	text: string;
	// replyToMessageId?: string;
	// editDate?: number; // Unix time
	// isViewed?: true;
	// photo?: Array<PhotoSize>;

	// forwardFromId?: number;
	// forwardFromChatId?: number;
	// forwardFromMessageId?: number;
	// forwardSenderName?: string;
	// forwardDate?: number;

	// newChatMembers?: Array<Contact>; // or ids;
	// leftChatMember?: Contact;
	// newChatTitle?: string;
	// newChatPhoto?: Array<PhotoSize>;
	// deleteChatPhoto?: true;
	// groupChatCreated?: true;
	// channelChatCreated?: true;
}
