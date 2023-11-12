import { useState } from "react";

import "./App.css";

import Icon from "./components/Icon";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import FeedbackSuccess from "./components/FeedbackSuccess";

function App() {
  const [feedback, setFeedBack] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const isSubmitted = {
    alignItems: "center",
    gap: "2rem",
  };

  const handleSubmit = function () {
    if (!feedback) return;
    setSubmitted(true);
  };

  return (
    <div style={submitted ? isSubmitted : null} className="container">
      {submitted ? (
        <FeedbackSuccess curFeedback={feedback} />
      ) : (
        <>
          <Icon />
          <Header>How did we do?</Header>
          <Buttons curFeedback={feedback} onSetFeedBack={setFeedBack} />
          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </>
      )}
    </div>
  );
}

export default App;
