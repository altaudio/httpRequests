import React from 'react'
import Hello from './hello'
import Kitty from './kitty'

/*
class HelloKitty extends React.Component {
	render () {
		return (
			<div>
			  <Hello />
			  <Kitty />
			</div>

			)
	}
} 

export default HelloKitty
*/

export default () => (
	<div>
	  <Hello />
	  <Kitty />
	</div>
)