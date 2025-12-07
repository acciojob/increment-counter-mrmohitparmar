// your JS code here. If required.

let incrementBtn = document.getElementById("incrementBtn");

function inc() {
    let counterEl = document.getElementById("counter");
    let counter = Number(counterEl.innerText); // Convert to number
	alert(counter)
    counter++;
	
    counterEl.innerText = counter; // Update UI
}

incrementBtn.addEventListener("click", inc);
