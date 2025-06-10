export default function convertDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString();
}