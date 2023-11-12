import illustration from "../images/illustration-thank-you.svg";

function FeedbackSuccess({ curFeedback }) {
  return (
    <>
      <img
        className="thank-you-illustration"
        src={illustration}
        alt="illustration-thank-you"
      />
      <span className="rating-result">You selected {curFeedback} out of 5</span>
      <h1 className="thank-you-header"> Thank you!</h1>
      <p className="thank-you-content">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </>
  );
}

export default FeedbackSuccess;
