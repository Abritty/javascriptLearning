// Function to simulate an asynchronous operation using a Promise
//Async = makes a function return a Promise
//Await = makes a async function wait for a Promise to resolve or reject

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // Simulate success or failure
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000); // Simulate a delay of 2 seconds
  });
}

// Async function to use the Promise with async/await
async function getData() {
  try {
    console.log("Fetching data...");
    const result = await fetchData(); // Wait for the Promise to resolve
    console.log('result', result); // Log the resolved value
  } catch (error) {
    console.error('error:', error); // Handle any errors
  }
}

// Call the async function
getData();
