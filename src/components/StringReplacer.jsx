import {useState} from 'react'
import './StringReplacer.css'

const StringReplacer = ({text, setText}) => {
  const [searchString, setSearchString] = useState('')
  const [replaceString, setReplaceString] = useState('')

  const handleReplace = () => {
    const regex = new RegExp(searchString, 'g')
    const newText = text.replace(regex, replaceString)
    setText(newText)
    setSearchString('')
    setReplaceString('')
  }

  return (
    <div className="string-replacer">
      <input
        type="text"
        value={searchString}
        onChange={e => setSearchString(e.target.value)}
        placeholder="String to delete"
      />
      <input
        type="text"
        value={replaceString}
        onChange={e => setReplaceString(e.target.value)}
        placeholder="Replace with"
      />
      <button type="button" onClick={handleReplace}>
        Replace All
      </button>
    </div>
  )
}

export default StringReplacer
