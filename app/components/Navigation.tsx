import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="navbar-brand" to="/">
                <p className="font-bold text-2xl text-gradient">CVision</p>
            </Link>
            <Link to="/upload-resume">
                <p className="primary-button w-fit">Upload resume</p>
            </Link>
        </nav>
    )
}

export default Navbar;