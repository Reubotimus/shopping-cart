import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Home() {
    return (
    <>
      <Header />
      <div>Hero</div>
      <Link to="/items">Shop Now!</Link>
    </>
    )
}