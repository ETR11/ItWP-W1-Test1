// Check if the html-page is on ready state:
if (document.readyState !== "loading") {
  // Initialize the code:
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

// Create a function to initialize code, when the document is ready:
function initializeCode() {
  // Taking the element from html file:
  const helloButton = document.getElementById("my-button");
  const notes = document.getElementById("text");
  const addDataButton = document.getElementById("add-data");
  const list = document.getElementById("list");
  const data = document.getElementById("data");

  // Define what happens when the hello-button is clicked:
  helloButton.addEventListener("click", () => {
    console.log("hello world"); // "Text "hello world" is printed to console
    notes.innerText = "My notebook"; // Text inside tag h1 is changed to "My notebook"
  });

  // Define what happens, when the "Add Data"-button is clicked:
  addDataButton.addEventListener("click", function () {
    const newElement = document.createElement("li"); // Define new element
    newElement.textContent = data.value; // Add text to the element
    list.append(newElement); // Append the element to the unordered list
  });
}
