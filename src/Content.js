import React, { useEffect } from "react";
import Typed from "typed.js";

const Content = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const options = {
        showCursor: true,
        strings: [
          "Click on the Bot icon to get started",
          "Need a pick-me-up? Just say 'Tell me a joke' to our bot, and let the laughter therapy begin..."
        ],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000
      };

      // elRef refers to the <span> rendered below
      typed.current = new Typed(el.current, options);

      return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.current.destroy();
      };
    }, 1000);
  }, []);

  return (
    <div>
      <h3>
        <span ref={el} />
      </h3>
    </div>
  );
};

export default Content;
