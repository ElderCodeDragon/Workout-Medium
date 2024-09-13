const warmUpButton = document.querySelector("#warmupButton");
const workOutButton = document.querySelector("#workoutButton");
//const sets = document.querySelector(".sets");

warmUpButton.addEventListener("click", WarmUpButtonClicked, false);
workOutButton.addEventListener("click", WorkOutButtonClicked, false);
//sets.addEventListener("click", SetButtonClicked, false);

function WarmUpButtonClicked(event) {
    alert("You clicked the Warm Up Button!");
}

function WorkOutButtonClicked(event) {
    alert("You clicked the Work Out Button!");
}

//function SetButtonClicked(event) {
//    let obj = event.target;
//    if (obj.nodeName == "BUTTON" && !obj.classList.contains("add-set"))
//        CompleteSetButtonClicked(obj);
//    if (obj.nodeName == "BUTTON" && obj.classList.contains("add-set"))
//        AddSetButtonClicked(obj);
//}

const addSetButtons = [...document.querySelectorAll(".button-group > .add-set")];
const completeButtons = [...document.querySelectorAll(".button-group > button:not(.add-set)")];

addSetButtons.forEach(asb => {
    asb.addEventListener("click", AddSetButtonClicked, false);
});

completeButtons.forEach(cb => {
    cb.addEventListener("click", CompleteSetButtonClicked, false);
});

function CompleteSetButtonClicked(event) {
    let button = event.target;
    let max = parseInt(button.getAttribute("maxReps"));
    let reps = parseInt(button.innerText);
    if (reps == max && !button.classList.contains("completed")) {
        button.classList.add("completed");
    } else {
        if (reps == max && button.classList.contains("completed")) {
            reps--;
            button.classList.remove("completed");
            button.classList.add("failed");
            button.innerText = reps;
        } else {
            if (reps > 0 && button.classList.contains("failed")) {
                reps--;
                button.innerText = reps;
            } else {
                if (reps == 0 && button.classList.contains("failed")) {
                    reps = max;
                    button.classList.remove("failed");
                    button.innerText = reps;
                }
            }
        }

    }
}

function AddSetButtonClicked(event) {
    let button = event.target;
    let buttonGroup = button.parentElement;
    let max = parseInt(button.previousElementSibling.getAttribute("maxReps"));
    let buttonCount = buttonGroup.children.length;
    let setType = buttonGroup.previousElementSibling.previousElementSibling.classList[1];
    switch (setType) {
        case "pyramid":
            max -= 2;
            break;
    }
    if (max > 0) {
        let newButton = document.createElement("button");
        newButton.setAttribute("maxReps", max);
        newButton.innerText = max;

        buttonGroup.insertBefore(newButton, button);
    } else {
        buttonGroup.removeChild(button);
    }
        
}