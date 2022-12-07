import colors from "tailwindcss/colors";
export function checkTailwindColor(color) {
    const c = color.split("-");
    // Checks if it is a tailwind color
    if (c.length !== 2)
        return color;
    // Checks if first color is in colors
    if (!colors[c[0]])
        return color;
    // Checks if second color is a shade and in colors
    if (!colors[c[0]][c[1]])
        return color;
    return colors[c[0]][c[1]];
}
