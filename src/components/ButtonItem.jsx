function ButtonItem({ feedback, curFeedback, onSetFeedBack }) {
  const isActive = curFeedback === feedback + 1;

  return (
    <button
      className={`btnItem ${isActive ? "active" : ""}`}
      onClick={() => onSetFeedBack(feedback + 1)}
    >
      {feedback + 1}
    </button>
  );
}

export default ButtonItem;
