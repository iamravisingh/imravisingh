import { Header } from "../../components/Header"
import { Profile } from "./component"
import "./style.css";

export const Home = () => {
    return (
        <div className="container">
            <Header/>
            <section>
                <Profile/>
            </section>
        </div>
    )
}