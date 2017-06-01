export function undefinedToEmpty(value?: string): string {
    if (value !== undefined) {
        return value
    }
    return ""
}
