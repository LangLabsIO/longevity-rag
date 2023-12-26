import React, {useState} from 'react'
import FlashCard from './FlashCard';
import "./Quiz.css";


const Quiz = (props) => {
    let[questionIndex, setQuestionIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const incrementIndex = () => {
        setQuestionIndex((prev) => prev + 1);
        setShowAnswer(false);
    }
    
    const currentQuestion = props.questions[questionIndex];
    if(!currentQuestion){
        return <p className='ending'>Wow, you've successfully mastered the React! I mean, who wouldn't know that JSX stands for 'Java and XML' and that the virtual DOM is just a backup dancer for Beyoncé's next concert? You're practically a React rockstar now! Now say thankyou</p>
    }
  return (
    <FlashCard question={currentQuestion.question} answer={currentQuestion.answer} incrementIndex={incrementIndex} showAnswer={showAnswer} setShowAnswer={setShowAnswer}>
      
    </FlashCard>
  )
}

export default Quiz
