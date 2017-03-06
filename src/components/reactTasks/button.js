import React from 'react'

class Button extends React.Component {
	render () {
		return (
			  <button onClick={_sayHello}>Say Hello</button>
			)
		
	}
}

function _sayHello(e) {
	e.preventDefault();
	console.log("Hello!");
}
 

export default Button
