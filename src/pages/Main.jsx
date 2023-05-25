import { Link } from "react-router-dom";
import Card from "../components/card/Card";
import { TYPES } from "../constants/types";

export default function Main({ data, typeCount }) {
    return (
        <div className="info">
            <div className="info_welcome">
                <h1>Welcome</h1>
                <p>With supporting text below as a natural lead-in to additional content.</p>
                <Link to='/navigator/tab/0' className="info_welcome_btn">
                    See transactions
                </Link>
                <div>
                    You have {data.total} transactions
                </div>
            </div>
            <div className="cards">
                {TYPES.map((type, index) => (
                    <Card page={index} key={type} type={type} count={typeCount(type)} />
                ))}
            </div>
        </div>
    )
}