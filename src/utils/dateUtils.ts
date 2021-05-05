export const formatDateToString = (date: Date) =>
    date ? new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(date) : '';

export const sanitizeDate = (date: string | Date) =>
    date && !(date instanceof Date) ? new Date(date.replace(/-/g, '/')) : undefined;
