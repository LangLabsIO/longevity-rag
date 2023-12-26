import { createChatBotMessage } from "react-chatbot-kit";
import CoBotAvatar from "../chatbot/BotAvatar";
import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";
import UserAvatar from "../chatbot/UserAvatar";

const config = {
    lang: "no",
    botName: "React UI Bot",
    initialMessages: [createChatBotMessage(`Hi there mate, please choose an option to get started.`, {
        widget: "options"
    })],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#04668a"
          },
          chatButton: {
            backgroundColor: "#0f5faf"
          },
      },
      customComponents: { 
        botAvatar: (props) => <CoBotAvatar {...props} /> ,
        userAvatar: (props) => <UserAvatar {...props} />,
    },
    
      widgets: [
        {
          widgetName: 'options',
          widgetFunc: (props) => <Options {...props} />,
          
        },
        {
            widgetName: 'reactQuiz',
            widgetFunc: (props) => <Quiz {...props} />,
            props: {
                questions : [
                    {
                        question: "Ques1: What is JSX in React?",
                        answer: "Answer: JavaScript XML",
                        id: 1
                    },
                    {
                        question:"Ques2: What is the purpose of the useState hook in React?",
                        answer: "Answer: To manage and update state in functional components",
                        id: 2
                    },
                    {
                        question: "Ques3: In React, what is the virtual DOM used for?",
                        answer : "Answer: To optimize rendering and improve performance",
                        id: 3
                    }
                ],
            },
            
          },
      ],
}

export default config