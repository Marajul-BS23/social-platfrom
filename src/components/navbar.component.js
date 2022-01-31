import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light nav-box">
            <div className="navbar-brand mx-3">
                <span className="badge bg-primary">Social Platform</span>
            </div>
            <Link className="navbar-brand" to="/login">
                Login
            </Link>
            <Link className="navbar-brand lf" to="/signup">
                SignUp
            </Link>
        </nav>
    );
};

export default Navbar;
