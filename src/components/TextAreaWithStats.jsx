import {useState, useEffect} from 'react'
import Statistics from './Statistics'
import StringReplacer from './StringReplacer'
import './TextAreaWithStats.css'

const TextAreaWithStats = () => {
  const [text, setText] = useState(
    localStorage.getItem('textContent') || 'This is some default dummy data.',
  )

  useEffect(() => {
    localStorage.setItem('textContent', text)
  }, [text])

  return (
    <div className="card-container">
      <h1 className="project-title">TexTuner</h1>
      <a
        href="https://www.linkedin.com/in/saichandanyadav/"
        target="_blank"
        className="developer"
        rel="noreferrer"
      >
        By: Sai Chandan
      </a>
      <textarea
        className="textarea"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type here..."
      />
      <Statistics text={text} />
      <StringReplacer text={text} setText={setText} />
    </div>
  )
}

export default TextAreaWithStats
