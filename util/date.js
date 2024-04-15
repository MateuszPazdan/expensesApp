export function getFormattedDate(date) {
	const day = date.getUTCDate();
	const month = date.toLocaleString('PL', { month: 'long' });
	const year = date.getUTCFullYear();

	return `${day} ${month} ${year}`;
}

export function getDateMinusDays(date, days) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
