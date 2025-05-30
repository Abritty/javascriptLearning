const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return (
    "-".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    "-".repeat(rowCount - rowNumber)
  );
}

while (rows.length < count) {
  console.log("rows.length", rows.length);
  rows.push(padRow(rows.length + 1, count));
}

let result = "";

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);

/* 
Output:
-------#-------
------###------
-----#####-----
----#######----
---#########---
--###########--
-#############-
###############

*/
