export function getFormattedDate(date) {
	const day = date.getUTCDate();
	const month = date.toLocaleString('PL', { month: 'long' });
	const year = date.getUTCFullYear();

	return `${day} ${month} ${year}`;
}
