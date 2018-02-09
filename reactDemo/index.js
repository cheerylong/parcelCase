import "./index.scss"
import React from "react"
import ReactDOM from "react-dom"

console.log(React)

const App = () => {
	return <div className="title"><h1>biubiubiu</h1></div>
};

const appEl = document.getElementById("root")

ReactDOM.render(<App/>, appEl)