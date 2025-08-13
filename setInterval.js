function testing(){
  console.log("Testing setInterval cancellation");
}

const stop = setInterval(testing, 1000);

setTimeout(() => {
  console.log("Stopping setInterval");
  clearInterval(stop);
}
, 5000); // Stop after 5 seconds