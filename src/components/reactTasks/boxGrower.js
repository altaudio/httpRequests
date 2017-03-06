import React from 'react'

class BoxGrower extends React.Component {
	constructor () {
		super ()
		this.state = {divHeight : 100}
	}

	render () {
		return (
			<div>
			  <div style={{width: 100, height: this.state.divHeight, backgroundColor: 'powderblue'}}>
			  </div>

			  <button onClick={() => this.growBox()}>Grow</button>
			</div>
			)
	}

	growBox () {
		this.setState({divHeight : this.state.divHeight + 20});
	}

} 



export default BoxGrower
