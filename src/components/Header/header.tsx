import Resume from "../../../public/ravi_singh_resume.pdf"
import "./style.css";

export const Header = () => {
    return (
        <header>
            <a target="_blank" href={Resume}>Resume</a>
            <a href="/blogs">Blogs</a>
        </header>
    )
}