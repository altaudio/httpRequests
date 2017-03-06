import React from 'react'

/*
class BigButton extends React.Component {
	render () {
		  return (
		  <button onClick={this.props.onPress}>{this.props.children}</button>
		  )
        } 
}

export default BigButton
*/

export default (props) => (
	  <button onClick={props.onPress}>{props.children}</button>

	)


	
