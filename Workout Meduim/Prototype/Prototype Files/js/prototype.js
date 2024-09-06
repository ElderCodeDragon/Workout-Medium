const warmUpButton = document.querySelector("#warmupButton");
const workOutButton = document.querySelector("#workoutButton");

warmUpButton.addEventListener("click", WarmUpButtonClicked, false);
workOutButton.addEventListener("click", WorkOutButtonClicked, false);

function WarmUpButtonClicked(event) {
    alert("You clicked the Warm Up Button!");
}

function WorkOutButtonClicked(event) {
    alert("You clicked the Work Out Button!");
}