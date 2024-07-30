import "./Header.css"
import { Link } from "react-router-dom"
import { Context } from "../App"
import { useContext } from "react"

export default function Header() {
    let [cart, updateAmount] = useContext(Context);
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/items">Shop</Link>
            <Link to="/cart">Cart ({Object.keys(cart).length})</Link>
        </div>
    )
}