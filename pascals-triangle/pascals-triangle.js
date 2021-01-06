//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
  const triangle = [];
  Array.from({ length: n }).forEach((_, i) => {
    const row = Array.from({ length: i + 1 }).map((_, j) => {
      switch (j) {
        case 0:
        case i:
          return 1;
        default:
          return triangle[i - 1][j - 1] + triangle[i - 1][j];
      }
    });
    triangle.push(row);
  });
  return triangle;
};
