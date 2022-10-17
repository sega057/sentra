export function validateUsername(username: string) {
	let result = username.replace(/[^a-zA-Z0-9-_.@]/g, "");
	if (result.length > 20) {
		result = result.slice(0, 20);
	}
	return result;
}
