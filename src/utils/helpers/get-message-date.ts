import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
dayjs.extend(isToday);

export function getMessageDate(messageDate: number): string {
	const now = dayjs();
	const date = dayjs(messageDate);

	if (date.isToday()) {
		return date.format("HH:mm");
	}

	const weekDiff = now.diff(date, "weeks");
	if (weekDiff < 1) {
		return date.format("ddd");
	}

	const isPrevYear = now.format("YYYY") > date.format("YYYY");
	if (!isPrevYear) {
		return date.format("DD.MM");
	}

	return date.format("DD.MM.YY");
}
