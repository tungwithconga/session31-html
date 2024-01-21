function truncate(str, n) {
    if (str.length <= n) {
        return str;
    }
    return str.substring(0, n) + "...";
}
const originalString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const truncatedString = truncate(originalString, 20);

console.log(truncatedString);
