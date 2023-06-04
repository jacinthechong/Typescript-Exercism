export class Matrix {
  matrix: string;

  constructor(matrix: string) {
    this.matrix = matrix;
  }

  get rows(): number[][] {
    let rowsArray = this.matrix.split("\n").map((row) => {
      let rowString = row.split(" ");
      return rowString.map((numberString) => {
        return Number(numberString);
      });
    });
    return rowsArray;
  }

  get columns(): number[][] {
    let rowsArray = this.matrix.split("\n").map((row) => {
      return row.split(" ");
    });
    let columnsArray = [];
    for (let i = 0; i < rowsArray[0].length; i++) {
      let column = rowsArray.map((row) => {
        return Number(row[i]);
      });
      columnsArray.push(column);
    }
    return columnsArray;
  }
}
