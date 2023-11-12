import ButtonItem from "./ButtonItem";

function Buttons({ curFeedback, onSetFeedBack }) {
  return (
    <div className="feedback">
      {[...Array(5)].map((_, index) => {
        return (
          <ButtonItem
            curFeedback={curFeedback}
            feedback={index}
            onSetFeedBack={onSetFeedBack}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Buttons;
