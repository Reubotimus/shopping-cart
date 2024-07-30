import { useEffect, useState } from "react"
import Item from "../components/Item";
import "./ItemList.css"
import Header from "../components/Header";

export default function Shop() {
    let [itemsJSON, setItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => {
                setItems(res)})
    }, [])

    return(
        <>
            <Header />
            <div className="items">
            {itemsJSON.map(element => {
                    return <Item key={element.id} item={element}/>})}
            </div>
        </>
    )
}