import React from 'react'

//Declare Component
class NextName extends React.Component {
	constructor () {
		super ()
		//set index in state to 0. Index refers to index of names array
		this.state = {index : 0}
	}

	//Display the vlaue of names array at state index, and display button which calls incrementIndex method on click (??? .bind(this) binds method to constructor ???)
	render () {
		return (
			<div>
			  <p>{this.props.names[this.state.index]}</p>
			  <button onClick={() => this.incrementIndex()}>Next</button>
			</div>
			)
	}

	incrementIndex () {

		//If state index is less than length of the array then increment index
		if (this.state.index < (this.props.names.length - 1)) {
			this.setState({index : this.state.index + 1 });

		//else set index to 0 (complete loop)
		} else {
			this.setState({index : 0 });
		}

	}

} 

export default NextName
 
