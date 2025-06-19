import css from "./Feedback.module.css";

export default function Feedback({states, totalFeedback, positiveFeedback}) {
    return <>
        <div className={css.container}>
            <p>good: {states.good}</p>
            <p>neutral: {states.neutral}</p>
            <p>bad: {states.bad}</p>
            <p>total: {totalFeedback}</p>
            <p>positive: {positiveFeedback}%</p>
        </div>
    </>;
}