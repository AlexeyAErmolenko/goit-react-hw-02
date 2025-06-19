import css from "./Notification.module.css";

export default function Notification({text}) {
    return <>
        <div className={css.container}>
            <p className={css.text}>{text}</p>
        </div>
    </>;
}