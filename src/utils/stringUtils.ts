export default function generateRandomStrWithLength(length: number) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length })
        .map(() => {
            return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        })
        .join('');
}

export function getDateFromString(str?: string) {
    if (str) {
        const a = str.split(/[^0-9]/).map(s => {
            return parseInt(s, 10);
        });
        return new Date(a[0], a[1] - 1 || 0, a[2] || 1, a[3] || 0, a[4] || 0, a[5] || 0, a[6] || 0);
    }
    return undefined;
}
