class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

   handleReactQuiz = () => {
    const message = this.createChatBotMessage("Fantastic. Here are your flashcards, click on them to see answers and next questions. Good luck!", {
        widget: "reactQuiz",
    });
    this.addMessageToState(message);
   }

   handleJoke = () => {
    var jokes = [
      "Why do JavaScript developers prefer dark mode? Because light attracts bugs!",
      "How many React developers does it take to change a lightbulb? None, they prefer unidirectional data flow.",
      "Why did the React component break up with the JavaScript function? It couldn't handle the constant state of affairs.",
      "A JavaScript function walks into a bar. The bartender says, 'Sorry, we don't serve your type here'. The function responds, 'That's okay, I'll callback later!'",
      "Why do programmers prefer React over relationships? With React, you can break up with your components and create new ones without any emotional baggage.",
      "What's a JavaScript developer's favorite game? Callbackgammon.",
      "Why did the JavaScript developer go broke? Because he used up all his cache!",
      "How do you comfort a JavaScript bug? You console it!",
      "Why did the React component feel sad? It lost its state of mind.",
      "What did the JavaScript say to the HTML? 'You've got no class!'"
    ];

    var randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    const message = this.createChatBotMessage(randomJoke);

    this.addMessageToState(message);
  };

  handleThanks = () => {
    const message = this.createChatBotMessage("You're welcome");

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message]
    }));
  };
 }
 
 export default ActionProvider;