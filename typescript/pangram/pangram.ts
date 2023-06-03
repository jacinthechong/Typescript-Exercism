export function isPangram(statement: string): boolean {
  let regexStatement = statement.replace(/[^a-z]/gi, "").toLowerCase();
  let letterHashTable: { [letter: string]: number } = {};
  for (let i = 0; i < regexStatement.length; i++) {
    letterHashTable[regexStatement[i]] = !letterHashTable[regexStatement[i]]
      ? 1
      : letterHashTable[regexStatement[i]] + 1;
  }
  return Object.keys(letterHashTable).length === 26;
}
