const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  let str =
    ".".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    ".".repeat(rowCount - rowNumber);
  //   console.log("str", rowNumber, rowCount, str);
  return str;
}

for (let i = 1; i <= count; i++) {
  rows.unshift(padRow(i, count));
}

let result = "";

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);

/* 
Output:
###############
.#############.
..###########..
...#########...
....#######....
.....#####.....
......###......
.......#.......
*/
