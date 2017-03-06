import React from 'react'
import _ from 'lodash'
import Menu from './menu'
import Cell from './cell'
import CommentsBox from './commentsBox'
import { randText } from './randomText.js'

export default () => {
  return (
    <div>
      <Menu />
      <div style={{ display: 'inline-block', width: '700', marginLeft: 'auto', marginRight: 'auto', }}>

        {_.times(9, (index) => <Cell text={randText[index]} />)}

      </div>

      <div style={{ display: 'block' }}>
        <CommentsBox />
      </div>
    </div>

  )
}
