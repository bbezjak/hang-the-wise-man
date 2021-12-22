export const isCharLetter = (char: string) => {
    return char.length === 1 && char.toLowerCase().match(/[a-z]/i);
}