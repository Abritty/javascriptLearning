const rows = [];
const character = "#";
let result = "";

function createPyramid(levels) {
  for (let i = 0; i < levels; i = i + 1) {
    rows.push(character.repeat(i));
  }

  console.log("rows", rows); // rows [ '', '#', '##', '###', '####', '#####', ]

  for (const row of rows) {
    result = result + row + "\n";
  }

  console.log(result);
}

// Call the function
createPyramid(4);
// Output:
// #
// ##
// ###
