import React from 'react'

function Dictionary (props) {
  const definitionData = props.data
  console.log(definitionData)
  return (
    <div>
      {definitionData.map((info, idx) => {
        return (
          <div key={idx}>
            <p>{info.definition}</p>
          </div>
        )
      })}
      {/* <p>{props.data.definition}</p> */}
    </div>
  )
}

export default Dictionary
