// The employment history records April 2023; experience advances by calendar month.
export const EXPERIENCE_START = { year: 2023, month: 4 };

export function getExperience(date = new Date()) {
    const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'numeric',
    }).formatToParts(date);
    const year = Number(parts.find((part) => part.type === 'year')!.value);
    const month = Number(parts.find((part) => part.type === 'month')!.value);
    const totalMonths = Math.max(
        0,
        (year - EXPERIENCE_START.year) * 12 + month - EXPERIENCE_START.month,
    );
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const label = [
        years ? `${years} year${years === 1 ? '' : 's'}` : '',
        months || !years ? `${months} month${months === 1 ? '' : 's'}` : '',
    ]
        .filter(Boolean)
        .join(' ');
    return { years, months, totalMonths, label };
}
