import React from 'react'


class Text extends React.Component {
	render () {
		return (
			<p style={this.props.style}>{this.props.children}</p>
			)
	}
}




export default Text

 
 
