export const isExternalLink = (str: string) => str.substr(0, 8) === 'https://' || str.substr(0, 7) === 'http://';
