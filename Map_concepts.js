//The key can be of any data type, including objects, functions, and even other maps.
let myMap = new Map([
  ["key1", "value1"],
  [true, "value2"],
  [1, "numberKey"],
  [{}, "objectKey"],
]);
myMap.set("name", "Alice");
console.log(myMap);
// output: Map(5) { 'key1' => 'value1',
//                  true => 'value2',
//                  1 => 'numberKey',
//                  {} => 'objectKey',
//                  'name' => 'Alice' }
console.log(myMap.get("name")); // Output: 'Alice'
console.log(myMap.has("key1")); // Output: true
console.log(myMap.delete("key1"));
console.log(myMap.size);
