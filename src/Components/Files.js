import React from 'react'

export default props => {

  const files = props.files.map(file => <li key={file.name}>{file.name}</li>)

  return (
    <div className='files'>
      <ul>{files}</ul>
    </div>
  )
}