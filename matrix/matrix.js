//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(string) {
    this.matrix = string.split("\n");
  }

  get rows() {
    const rows = this.matrix.map((row) => row.split(" "));
    return rows.map((row) => row.map((number) => Number(number)));
  }

  get columns() {
    const cols = this.matrix[0].split(" ").map(() => []);
    this.matrix.forEach((row) => {
      row.split(" ").forEach((number, i) => {
        cols[i].push(number);
      });
    });
    return cols.map((row) => row.map((number) => Number(number)));
  }
}
