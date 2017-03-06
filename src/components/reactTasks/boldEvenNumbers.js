import React from 'react'

/*
class BoldEvenNumbers extends React.Component {
	render () {
		return (
			<div>
			  <ul>
			    {_.map(this.props.numbers, (number) => {
			    	if((number % 2) == 0) {
			    		return <li><b>{number}</b></li>
			    	} else {
			    		return <li>{number}</li>
			    	}
			    })}
			  </ul>
			</div>

			)
	}
}

export default BoldEvenNumbers 
*/

//With props requires props argument, and doesn't require this., which refers to class only
export default (props) => (

   <div>
     <ul>
       {_.map(props.numbers, (number) => {
	     if((number % 2) == 0) {
		   return <li><b>{number}</b></li>
	     } else {
	       return <li>{number}</li>
	     }
	   })}
     </ul>
   </div>
)

