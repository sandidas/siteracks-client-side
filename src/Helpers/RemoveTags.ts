export function RemoveTags(content: string): string {
    const regex = /(<([^>]+)>)/gi; // Regular expression to match HTML tags
    return content.replace(regex, ""); // Remove HTML tags from the content
}