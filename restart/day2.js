function closureExample() {
    let message = "Hello, World!";
  
    setTimeout(function () {
      console.log("Message:", message);
    }, 100);
  
    message = "Hello, Shreya!";
  }
  
  closureExample();



  console.log("Start");

  setTimeout(() => {
    console.log("Timeout finished");
  }, 1000);
  
  console.log("End");
  
  
  function closureExample() {
    let message = "Hello, World!"
  message = "Hello, Shreya!";
  console.log("Message:", message);

  }
  
  closureExample();
  
  const fs = require('fs');

console.log("Start reading file...");

const data = fs.readFileSync('./data.json', 'utf-8'); // Synchronous blocking
console.log("File content:", data);

console.log("End of script.");




console.log("Start reading file...");

fs.readFile('./data.json', 'utf-8', (err, data) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("File content:", data);
});

console.log("End of script.");
