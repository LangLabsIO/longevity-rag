class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
    //   console.log(message)
        message = message.toLowerCase()
      if (
        message.includes("joke") ||
        message.includes("jokes") ||
        message.includes("funny")
      ) {
        return this.actionProvider.handleJoke();
      }
  
      if (message.includes("thanks") || message.includes("thank you")) {
        return this.actionProvider.handleThanks();
      }

      if (message.includes("learn") || message.includes("react")) {
        return this.actionProvider.handleReactQuiz();
      }
    }

  }
  
  export default MessageParser;