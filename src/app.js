const keys = ["O", "I", "D", "T", "Q", "H", "Y", "K", "L", "U"];
let currentKeyIndex = 0, keyElement = document.getElementById("key"), statusElement = document.getElementById("status");

document.getElementById("new-game").addEventListener("click", startNewGame);
document.addEventListener("keydown", handleKeydown);
document.addEventListener("keypress", (e) => e.preventDefault());

function updateKey() { keyElement.textContent = keys[currentKeyIndex]; }


function startNewGame() {
    currentKeyIndex = 0;
    updateKey();
    statusElement.textContent = "Гра розпочалась!";
    PNotify.success({ text: "Нова гра розпочалась!" });
}

function handleKeydown(event) {
    if (event.key.toUpperCase() === keys[currentKeyIndex]) {
        if (++currentKeyIndex < keys.length) {
            updateKey();
        } else {
            
            statusElement.textContent = "Ви виграли!";
        }
    } else {
        statusElement.textContent = "Ви програли!"; 
    }
}
updateKey();




