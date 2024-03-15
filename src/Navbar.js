import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar">
            <h2 id="logo">Just Blog</h2>
            <div className="navlist">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </div>
    )
}

export default Navbar;