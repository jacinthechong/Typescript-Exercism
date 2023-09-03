export class Robot {
  robotName: string | null;
  usedNames: Set<string>;
  constructor() {
    this.robotName = null;
    this.usedNames = new Set<string>();
  }

  public get name(): string {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    function generateLetter(): string {
      return alphabet[Math.floor(Math.random() * 26)];
    }

    function generateNumberString(): string {
      return Math.floor(Math.random() * 10).toString();
    }

    function generateRandomName(): string {
      return (
        generateLetter() +
        generateLetter() +
        generateNumberString() +
        generateNumberString() +
        generateNumberString()
      );
    }

    if (!this.robotName) {
      let nameSet = this.usedNames;
      function createName(): string {
        let robotName: string = generateRandomName();
        if (nameSet.has(robotName)) {
          return createName();
        } else {
          return robotName;
        }
      }
      let newName: string = createName();
      this.robotName = newName;
      this.usedNames.add(newName);
    }
    return this.robotName;
  }

  public resetName(): void {
    this.robotName = null;
  }

  public static releaseNames(): void {
    console.log(this);
  }
}
