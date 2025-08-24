const takeOrder = (customer, callback) => {
  console.log(`Take order from ${customer}`);
  callback(customer);
};
const processOrder = (customer, callback) => {
  console.log(`Processing order for ${customer}`);

  setTimeout(() => {
    console.log("cooking completed");
    console.log(`Order processed for ${customer}`);
    callback(customer);
  }, 3000);
};

const serveOrder = (customer) => {
  console.log(`Serving order to ${customer}`);
};

takeOrder("John", (customer) => {
  processOrder(customer, (customer) => {
    serveOrder(customer);
  });
});

console.log("Hello!!");
