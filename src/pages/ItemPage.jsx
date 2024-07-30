import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ErrorPage from "./ErrorPage"
import Header from "../components/Header"

export default function ItemPage() {
    const data = useParams()
    let [item, setItem] = useState({})
    if (isNaN(Number(data.id)) || Number(data.id) < 1 || Number(data.id) > 20) {
        return <ErrorPage />
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + data.id)
            .then(res => res.json())
            .then(res => setItem(res))
    }, []);

    if (item == {}) {
        return <h1>Loading...</h1>
    }

    return (
        <>
        <Header />
        <div>
            <img src={item.image} alt={"image of " + item.title} />
            <div>{item.title}</div>
            <div>$ {item.price}</div>
            <div>{item.description}</div>

        </div>
        </>
    )
}