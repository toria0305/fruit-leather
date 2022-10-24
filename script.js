
function addingEventListener() {
    const button = document.getElementById('link');
    console.log(button);

    button.addEventListener('click',clickALert);

    function clickALert() {
        alert('Loading More Rugs!');
    }
}

addingEventListener();


const h2 = document.createElement("h2");
h2.textContent = "Thank You, Come Again!";

document.querySelector("body").appendChild(h2);