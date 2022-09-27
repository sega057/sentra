export function getPrivateChatName(
	firstName: string,
	lastName: string | undefined,
): string {
	return [firstName, lastName].join(" ").trim();
}
