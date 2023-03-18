import Resume from "/ravi_singh_resume.pdf"
import { Link } from "react-router-dom";
// import Avatar from "/avatar.svg"
import "./style.css";

export const Header = () => {

    return (
        <header>
            <section>
                <div className="name">
                    {/* <Avatar/> */}
                    <Link to="/"><span>ravi.dev</span></Link>
                </div>
                <div className="header-menu">
                    <Link target="_blank" to={Resume}>Resume</Link>
                    <Link to="/blogs">Blogs</Link>
                </div>
            </section>
        </header>
    )
}