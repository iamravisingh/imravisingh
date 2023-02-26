import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Profile } from "./component"
import "./style.css";

export const Home = () => {
    return (
        <div className="container">
            <Header/>
            <section>
                <Profile/>
            </section>
            <Footer/>
        </div>
    )
}