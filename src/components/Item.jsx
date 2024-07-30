import { Link } from 'react-router-dom'
import './Item.css'
import { useContext, useState } from 'react'
import { Context } from "../App"
export default function Item({item}) {
    let [amount, setAmount] = useState(1);
    let [cart, updateAmount] = useContext(Context)
    // console.log(item)
    return (
        <Link className="item" to={"../item/" + item.id}>
            <img src={item["image"]} alt={"image of" + item["title"]} />
            <p><b>{item["title"]}</b></p>
            <p>$ {item["price"]}</p>
            <div className='cartFunctionality'>
                <button onClick={(e) => {
                    e.preventDefault()
                    if (amount > 1) {
                        setAmount(amount - 1);
                    }
                }}>-</button>
                {amount}
                <button onClick={(e) => {
                    e.preventDefault()
                    setAmount(amount + 1);
                }}>+</button>
                <button onClick={
                    (e) => {
                        e.preventDefault()
                        updateAmount(item, amount);
                        setAmount(1);

                    }
                }>ADD TO CART</button>

            </div>
        </Link>
    )
}