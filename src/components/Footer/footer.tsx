import { Twitter, Github, LinkedIn } from "./components"
import { SOCIAL_URL } from "./constant";
import "./style.css";

export const Footer = () => {
    return (
        <footer>
            <a target="_blank" href={SOCIAL_URL.GITHUB} ><Github/></a>
            <a target="_blank" href={SOCIAL_URL.TWITTER}><Twitter/></a>
            <a target="_blank" href={SOCIAL_URL.LINKED_IN}><LinkedIn/></a>
        </footer>
    )
}