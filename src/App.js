import Chatbot from 'react-chatbot-kit';
import './App.css';
import ActionProvider from './starter/ActionProvider';
import MessageParser from './starter/MessageParser';
import config from './starter/config';
import 'react-chatbot-kit/build/main.css';
import { useState } from 'react';
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Content from './Content';
import MetaTags from "react-meta-tags";

function App() {
  const [showBot, toggleBot] = useState(false);
  return (
    <div className="App">
     {/* <div style={{maxWidth: "300px"}}> */}
     <MetaTags>
        <title>React-UI-Chatbot</title>
        <meta name="description" content="COVID 19 assistance chatbot." />
      </MetaTags>
      <Fade bottom cascade>
        <h1>React-UI-Chatbot</h1>
        <h2>Start chatting with the React-UI-Chatbot!</h2>
      </Fade>
      <Content/>
        {showBot && (
        <Fade big>
          <div className="app-chatbot-container">
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        </Fade>
      )}
      <Flip left cascade>
        <button
          className="app-chatbot-button"
          onClick={() => toggleBot((prev) => !prev)}
        >
          <div>Bot</div>
          <svg viewBox="0 0 640 512" className="app-chatbot-button-icon">
            <path d="M192,408h64V360H192ZM576,192H544a95.99975,95.99975,0,0,0-96-96H344V24a24,24,0,0,0-48,0V96H192a95.99975,95.99975,0,0,0-96,96H64a47.99987,47.99987,0,0,0-48,48V368a47.99987,47.99987,0,0,0,48,48H96a95.99975,95.99975,0,0,0,96,96H448a95.99975,95.99975,0,0,0,96-96h32a47.99987,47.99987,0,0,0,48-48V240A47.99987,47.99987,0,0,0,576,192ZM96,368H64V240H96Zm400,48a48.14061,48.14061,0,0,1-48,48H192a48.14061,48.14061,0,0,1-48-48V192a47.99987,47.99987,0,0,1,48-48H448a47.99987,47.99987,0,0,1,48,48Zm80-48H544V240h32ZM240,208a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,240,208Zm160,0a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,400,208ZM384,408h64V360H384Zm-96,0h64V360H288Z"></path>
          </svg>
        </button>
      </Flip>
     {/* </div> */}
    </div>
  );
}

export default App;
