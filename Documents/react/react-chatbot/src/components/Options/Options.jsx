import React from 'react'
import "./Options.css"
const Options = (props) => {
    const options = [
        {
        text: "Learn about React",
        handler: props.actionProvider.handleReactQuiz,
        id: 1
        },
        {
            text: "Joke about React",
            handler: props.actionProvider.handleJoke,
            id: 2
        }
    ]
    const buttonsMarkup = options.map((option)=> (
        <button key={option.id} onClick={option.handler} className='option-button'>
            {option.text}
        </button>
    ))
  return (
    <div className='options-container'>
      {buttonsMarkup}
    </div>
  )
}

export default Options
