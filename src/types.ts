export type QuoteResponse = {
    _id: string; 
    tags: string[],
    content: string,
    author: string
    authorSlug: string,
    length: number,
    dateAdded: string,
    dateModified: string
}