import './Statistics.css'

const Statistics = ({text}) => {
  const uniqueWords = Array.from(new Set(text.toLowerCase().match(/\w+/g)))
    .length
  const charCount = text.replace(/[\s\W]/g, '').length

  return (
    <div className="statistics">
      <p>
        Unique Word Count: <span className="count">{uniqueWords}</span>
      </p>
      <p>
        Character Count (Excluding Spaces and Punctuation):{' '}
        <span className="count">{charCount}</span>
      </p>
    </div>
  )
}

export default Statistics
