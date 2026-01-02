// try {

// } catch (error) {

// }finally{

// }

try {
  let data = JSON.parse("invalid json");
} catch (err) {
  console.log("Something went wrong");
}

//Throwing your own error
function withdraw(amount) {
  if (amount <= 0) {
    throw new Error("Invalid amount");
  }
}

//throw = create your own problem

// Async error handling

async function fetchData() {
  try {
    const res = await fetch("url");
  } catch (err) {
    console.log("Network error");
  }
}

// Rule to remember forever:

// If code can fail → wrap in try...catch

async function getData() {
  try {
    const res = await fetch("https://api.example.com");
    const data = await res.json();
    console.log(data);
  } catch (err) {
  console.error(err);
  }
}