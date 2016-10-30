export function padZero(i: number, length: number): String {
    var s = i.toString()
    while (s.length < length) {
        s = '0' + s
    }
    return s
}