import React from 'react'

export default props => {

  const css = {
    height: '100px'
  }

  return (
    <div className='file-input'>
      <input style={css} type='file' multiple onChange={e => props.appendToState(e)}/>
    </div>
  )
}