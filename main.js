let myIdElement = document.getElementById("elzero");
let myTagElement = document.getElementsByTagName("js");
let myClassElement = document.getElementsByClassName("element");
let myQueryElement = document.querySelector("#elzero")
let myQueryElement2 = document.querySelector(".element")
let myQueryElement3 = document.querySelector("div")
let myQueryElement4 = document.querySelector(".js")
let myQueryallElement = document.querySelectorAll("#elzero")
let myQueryallElement2 = document.querySelectorAll(".element")
let myQueryallElement3 = document.querySelectorAll("div")
let myQueryallElement4 = document.querySelectorAll(".js")





console.log(myIdElement);
console.log(myIdElement.innerHTML);
console.log(myIdElement.textContent);
console.log(myTagElement);
console.log(myClassElement);
console.log(myQueryElement);
console.log(myQueryElement2);
console.log(myQueryElement3);
console.log(myQueryElement4);
console.log(myQueryallElement);
console.log(myQueryallElement2);
console.log(myQueryallElement3);
console.log(myQueryallElement4);
console.log(document.body);
console.log(document.title);



console.log("#".repeat(77));


let allImages = document.querySelectorAll("div img");
allImages.forEach((img) => {
	img.setAttribute(
		"src",
		"https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
	);
	img.alt = "Elzero Logo";
});

console.log("#".repeat(77));

const inputFeild = document.querySelector("form input");
const result = document.querySelector("form .result");

inputFeild.addEventListener("input", () => {
	if (inputFeild.value >= 0) {
		let eygptCurrency = inputFeild.value * 15.6;
		result.textContent = `{${inputFeild.value || 0}} USD Dollar = {${
			inputFeild.value === "" ? 0 : eygptCurrency.toFixed(2)
		}} Egyption Pound`;
	}
});

console.log("#".repeat(77));

let firstDiv = document.querySelector(".one");
let secondDiv = document.querySelector(".two");
let secondDivTitle = secondDiv.title;
let secondDivText = secondDiv.textContent;

secondDiv.title = firstDiv.title;
firstDiv.title = secondDivTitle;
secondDiv.textContent = `${firstDiv.textContent} 2`;
firstDiv.textContent = secondDivText;

console.log("#".repeat(77));


let allImgs = document.querySelectorAll(".old");

allImgs.forEach((older) => {
	if (older.hasAttribute("alt")) {
		older.alt = "Old";
	} else {
		older.alt = "Elzero New";
	}
});

console.log("#".repeat(77));


let app = () => {
	const form = document.forms[0];
	const numOfElements = document.querySelector("form input[type='number']");
	const text = document.querySelector("form input[type='text']");
	const type = document.querySelector("form select");
	const result = document.querySelector("form .results");

	form.onsubmit = (event) => {
		// Prevent the default act for a form when submit it (refresh and empty the fields).
		event.preventDefault();

		// Remove all childs of the result element.
		document.querySelectorAll(".results .box").forEach((box) => box.remove());

		if (numOfElements.value !== "" && text.value.trim() !== "") {
			if (numOfElements.value > 0) {
				for (let i = 0; i < numOfElements.value; i++) {
					let box = document.createElement(type.value);
					box.className = "box";
					box.title = "Element";
					box.id = `id-${i + 1}`;
					let boxText = document.createTextNode(text.value);

					box.appendChild(boxText);
					result.appendChild(box);
				}
			} else alert("Number Of Elements Should Be Greater Than 0");
		} else alert("Please fill in all the required fields.");
	};
};

app();







