import React from 'react'

class RandomNumberGenerator extends React.Component {
	constructor () {
		super ()
		this.state = {randNum : 0}
	}

	render () {
		return (
			<div>
			  <p>{this.state.randNum}</p>
			  <button onClick={() => this.generateNumber()}>Generate</button>
			</div>
			)
	}

	generateNumber () {
		this.setState({randNum : _.random(0, 10000)});

	}

} 

export default RandomNumberGenerator
