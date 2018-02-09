import "./index.scss"
let h1 = document.querySelector("h1")
let body = document.querySelector('body')
function append(el: Number) {
	console.log(el)
	h1.innerText = "biubiubiu!"
}
append(2)