/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const map = new Map();

  // Add all elements from arr1 to the map
  for (const obj1 of arr1) {
    map.set(obj1.id, obj1);
  }

  // Merge elements from arr2 into the map
  for (const obj2 of arr2) {
    if (map.has(obj2.id)) {
      // Spreading the arr2 object last ensures its properties override arr1's.
      map.set(obj2.id, { ...map.get(obj2.id), ...obj2});
    } else {
      map.set(obj2.id, obj2);
    }
  }

  // Convert the map values to an array and sort by id
//   console.log("final", Array.from(map.values()));
  return Array.from(map.values()).sort((a, b) => a.id - b.id);
};

const arr1 = [
  { id: 1, x: 10, y: 20 },
  { id: 2, x: 5, z: 8 },
];

const arr2 = [
  { id: 2, y: 15, z: 100 },
  { id: 3, a: 1, b: 2 },
];

const joinedArray = join(arr1, arr2);

console.log(joinedArray);
