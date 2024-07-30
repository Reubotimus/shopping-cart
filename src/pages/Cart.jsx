import { Context } from "../App";
import Header from "../components/Header";
import Item from "../components/Item";
import { useContext } from "react";
import "./Cart.css"
export default function Cart() {
    let [cart, updateAmount] = useContext(Context);

    return (
        <>
            <Header />
            <div className="checkout-items">
                {Object.keys(cart).map((id) => {
                    if (cart[id] == undefined) return 
                    return (
                    <div key={id} className="checkout-item">
                        <img src={cart[id]["image"]} alt={"image of" + cart[id]["title"]} />
                        <p><b>{cart[id]["title"]}</b></p>
                        <p>$ {cart[id]["price"]}</p>
                        <div className='cartFunctionality'>
                            <button onClick={(e) => {
                                e.preventDefault()
                                updateAmount(cart[id], cart[id]["amount"] - 1);
                            }}>-</button>
                            {cart[id]["amount"]}
                            <button onClick={(e) => {
                                e.preventDefault()
                                updateAmount(cart[id], cart[id]["amount"] + 1);
                            }}>+</button>
                            <button onClick={
                                (e) => {
                                    e.preventDefault()
                                    updateAmount(cart[id], 0);
                                }
                            }>REMOVE</button>

                        </div>
                    </div>
                )})}

            </div>
                
        </>

    )
}