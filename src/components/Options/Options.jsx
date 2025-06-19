import css from "./Options.module.css";

export default function Options({onUpdate, totalFeedback}) {
    return <>
        <div className={css.container}>
            <button className={css.button} onClick={() => onUpdate('good')}>good</button>
            <button className={css.button} onClick={() => onUpdate('neutral')}>neutral</button>
            <button className={css.button} onClick={() => onUpdate('bad')}>bad</button>
            {totalFeedback>0 && (<button className={css.button} onClick={() => onUpdate('reset')}>reset</button>)}
        </div>
    </>;
}