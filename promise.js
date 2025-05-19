console.log("Task 1");
console.log();

// Use a FETCH to request Pokémon information from a API
fetch("https://pokeapi.co/api/v2/pokemon/roaring-moon/")

// Use .then() to call the promise as a JSON file and covert to a javascript object.
.then((response) => response.json())
// Define a function to precise what happens with the results if successfully fetched.
.then((result) => {
    let respitems = result; // to store the results in a response item variable (respitem).

    // Log the results to the console;
    console.log(respitems["name"]);
    console.log(respitems["weight"]);
    console.log(respitems["overgrow"]);
})

// Use catch() to handle any errors that may come along.
.catch((error) => {
    // Log error to the console
    console.log(error);
});