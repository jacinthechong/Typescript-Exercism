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
};

interface Unit {
  [digit: number]: string;
}

const units: Unit = {
  0: 'ohms',
  1000: 'kiloohms',
  1000000: 'megaohms',
  1000000000: 'gigaohms'
};

export function decodedResistorValue(colorArray: string[]): string {
  let twoDigit: number = color[colorArray[0]] * 10 + color[colorArray[1]];
  if (color[colorArray[2]] < 2) {
    return (twoDigit * 10 ** color[colorArray[2]]).toString() + ' ' + units[0];
  } else if (color[colorArray[2]] < 5 && color[colorArray[2]] >= 2) {
    return ((twoDigit * 10 ** color[colorArray[2]]) / 1000).toString() + ' ' + units[1000];
  } else if (color[colorArray[2]] < 8 && color[colorArray[2]] >= 5) {
    return ((twoDigit * 10 ** color[colorArray[2]]) / 1000000).toString() + ' ' + units[1000000];
  } else {
    return ((twoDigit * 10 ** color[colorArray[2]]) / 1000000000).toString() + ' ' + units[1000000000];
  }
}
