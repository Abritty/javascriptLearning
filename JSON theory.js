let text = `{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}`;

let empty = {};
let blank = [];

const jsonString = '{"name":"Pavitr Prabhakar","age":17,"city":"Mumbattan"}';
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);
console.log(parsedObject.name); // Output: Pavitr Prabhakar
console.log(parsedObject.age); // Output: 17
console.log(parsedObject.city); // Output: Mumbattan

let json = JSON.parse(text);
let one = JSON.stringify(text);
console.log(JSON.stringify(empty).length);
console.log(JSON.stringify(blank).length);
console.log(json);
console.log(one);
