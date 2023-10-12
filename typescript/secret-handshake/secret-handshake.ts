const commandMap: { [key: number]: string } = {
  4: "wink",
  3: "double blink",
  2: "close your eyes",
  1: "jump",
};

export function commands(number: number): string[] {
  let lastFiveDigits = convertToBinary(number).slice(-5).padStart(5, "0");
  console.log(lastFiveDigits);
  let commandArray = [];
  for (let i = 4; i >= 1; i--) {
    if (lastFiveDigits[i] === "1") {
      commandArray.push(commandMap[i]);
    }
  }
  if (lastFiveDigits[0] === "1") {
    commandArray.reverse();
  }
  console.log(commandArray);
  return commandArray;
}

export function convertToBinary(number: number): string {
  const binaryArray: string[] = [];
  while (number >= 1) {
    let remainder: string = (number % 2).toString();
    binaryArray.unshift(remainder);
    number = Math.floor(number / 2);
  }
  return binaryArray.join("");
}

/**
00001 = wink
00010 = double blink
00100 = close your eyes
01000 = jump
10000 = Reverse the order of the operations in the secret handshake.
 */
