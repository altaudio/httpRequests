import React from 'react'

class Numbers extends React.Component {
	render() {
		return (
			<div>
			  <ul>
			    {this.props.numbers.map(number => <li>{number}</li> )}
			  </ul>
			</div>
			)
	}
} 

export default Numbers