import css from "./ClickCounter.module.css";

export default function ClickCounter({ feedbackType, onUpdate }) {
    return ( 
      <button className={css.button} onClick={() => onUpdate(feedbackType)}>
        {feedbackType}
      </button>
    );
  }