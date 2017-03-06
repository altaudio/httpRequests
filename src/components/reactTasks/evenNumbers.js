
import React from 'react'

class EvenNumbers extends React.Component {
	render () {
		return (
			<div>
			  <ul>
			    {_.map(_.filter(this.props.numbers, (number) => { 
			    		return ((number % 2) == 0);
			    		
			    }), (number) => {
			    	return <li>{number}</li>;
			    } ) }
			  </ul>
			</div>

			)
	}
}

export default EvenNumbers