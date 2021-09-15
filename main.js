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

