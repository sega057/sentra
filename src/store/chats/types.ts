export enum ChatTypes {
	private = "private",
	// group = "group",
	// chanel = "chanel",
}

export interface Chat {
	id: number;
	type: ChatTypes;
	lastUpdated: number; // to range chats in list
	// isPinned?: true;

	userId: number; // for private chats
	// or
	// user: Contact; // for private chats
	// or
	// username?: string; // for private chats
	// firstName?: string; // for private chats
	// lastName?: string; // for private chats
	// bio?: string; // for private chats

	// title?: string; // for groups and channels
	// description?: string; // for groups and channels
	// permissions?: ChatPermissions; // for groups and channels
	// slowModeDelay?: number; // in seconds for groups and channels
	// photo?: ChatPhoto; // for groups and channels
}

// export interface ChatPhoto {
// 	smallFileId: string;
// 	smallFileUniqueId: string;
// 	bigFileId: string;
// 	bigFileUniqueId: string;
// }

// export interface ChatPermissions {
// 	canSendMessages: boolean;
// 	canSendMediaMessages: boolean;
// 	canSendOtherMessages: boolean;
// 	canChangeInfo: boolean;
// 	canInviteUsers: boolean;
// 	canPinMessages: boolean;
// }
