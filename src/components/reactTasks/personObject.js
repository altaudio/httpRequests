import React from 'react'



class PersonObject extends React.Component {
	render () {
		return (
			<div>
			  <p>Name: {this.props.person.name}</p>
			  <p>Age: {this.props.person.age}</p>
			</div>

			)
	}
} 


export default PersonObject
 
