interface Color {
  [color: string]: number;
}

const color: Color = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
}

export function decodedValue(colorArray: string[]) {
 return color[colorArray[0]] * 10 + color[colorArray[1]];
}