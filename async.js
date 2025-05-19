console.log("Task 2");
console.log();

const container = document.querySelectorAll(".container");
async function apiFunction() {
    try {
        // Use fetch() to ask the API for data and wait for it to return.
        let response = await fetch(`http://thecatapi.com/api/images/get?format=src&type=gif`, {
            method: 'GET',
            headers: {
                'Authorization': basicAuthHeader
            }
        })
        .then(resp => resp.json())
        .then((result) => {
            const img = document.createElement("img");
            img.src = result[0].url;
            containerRule.appendChild(img);
        });
        //
        if (!response.ok) {
            throw new Error("HTTP error! status: ${response.status}");
        };
    //Set the catch error function to output a message in case of fetch feialure.
    } catch (err) {
        console.log("Sorry, a problem was encountered in your fetch");
    };
}
apiFunction();
// Define a click button function that uses an event listener to call the async function when clicked.
function clickButton() {
    const button = document.getElementById("mybutton");
    button.addEventListener("click", apiFunction);
}
clickButton();