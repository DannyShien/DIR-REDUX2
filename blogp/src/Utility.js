export function generateId(max=99999) {
    return Math.floor(Math.random() * Math.floor(max));
}