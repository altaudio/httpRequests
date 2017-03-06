import React from 'react'
import PersonObject from './personObject'

class Company extends React.Component {
	render () {
		return (
			<div>
			  <p>Company: {this.props.name}</p>

			  {_.map(this.props.employees, (value) => {
			  	return (
			  	       <PersonObject person={{name: value.name, age: value.age}} />
			  	       )
			  })}
			</div>

			)
	}
} 

export default Company