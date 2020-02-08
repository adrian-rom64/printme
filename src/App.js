import React, {useState, useRef} from 'react'
import Files from './Components/Files'
import './Styles/App.css'
import FileInput from './Components/FileInput'

const App = () => {

  const [files, setFiles] = useState([])

  const appendToState = event => {
    event.persist()
    setFiles(files => [...files, ...event.target.files])
  }

  return (
    <div className='App'>
      <Files files={files}/>
      <FileInput appendToState={appendToState} />
    </div>
  )
}

export default App
