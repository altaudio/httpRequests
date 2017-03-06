import React from 'react'

//Declare Component
class NextName extends React.Component {
	constructor () {
		super ()
		//set index in state to 0. Index refers to index of names array
		this.state = {index : 0}
	}

	//Display the value of names array at state index, and display button which calls incrementIndex method on click (??? .bind(this) binds method to constructor ???)
	render () {
		return (
			<div>
			  <p>{this.props.names[this.state.index]}</p>
			  <button onClick={() => this.incrementIndex()}>Next</button>
			</div>
			)
	}

	incrementIndex () {
		var nextIndex = this.state.index;
		nextIndex = nextIndex < (this.props.names.length - 1) ? ++nextIndex : 0;

		this.setState({index: nextIndex}); 
		}

} 

export default NextName
 
 
