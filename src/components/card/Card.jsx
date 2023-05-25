import { Link } from "react-router-dom";
import style from "./style.module.scss";

export default function Card({ count, type, page }) {
    return (
        <div className={style.card}>
            <p className={style.card_count}>{count}</p>
            <p className={style.card_type}>{type}</p>
            <Link to={`/navigator/tab/${page}`} className={style.card_btn}>
                See all
            </Link>
        </div>
    )
}