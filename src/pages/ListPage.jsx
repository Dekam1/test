import { data } from "../data/data"
import { LINKS } from "../constants/links";
import { NavLink, useHref } from "react-router-dom";

export default function ListPage() {
    const href = useHref().slice(11);

    const filtredDate = () => {
        for (let key in LINKS) {
            if (href === LINKS[key]) {
                return key
            }
        }
    }

    return (
        <div className="list_page">
            <nav>
                <NavLink to='/navigator/tab/0'>Outcome</NavLink>
                <NavLink to='/navigator/tab/1'>Loans</NavLink>
                <NavLink to='/navigator/tab/2'>Incomes</NavLink>
                <NavLink to='/navigator/tab/3'>Investments</NavLink>
            </nav>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Acount</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data
                        .filter(el => el.type === filtredDate())
                        .map(el => (
                            <tr key={el._id}>
                                <th>{el.name.first}</th>
                                <th>{Math.floor(Math.random() * (4000 - 1) + 1)}</th>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}