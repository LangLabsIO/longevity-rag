import React, {useState} from 'react'
import "./Quiz.css";

const FlashCard = ({question, answer, incrementIndex, showAnswer, setShowAnswer}) => {
    // const [showAnswer,setShowAnswer] = useState(false);
    useState(()=> setShowAnswer(false),[question])

  return (
    <>
    <div className='flashcard-container' onClick={()=> setShowAnswer(!showAnswer)}>
      {!showAnswer && question}
      {showAnswer && answer}
    </div>
    {showAnswer && (
        <button onClick={incrementIndex} className='flashcard-button'>
            Next Question
        </button>
    )}
    </>
  )
}

export default FlashCard
