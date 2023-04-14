
import { Outlet, Link } from "react-router-dom";
export default
    function navBar() {
    return (
        <>
            <nav className="navbar fixed-top navbar-light bg-dark">
                <form className="form-inline">
                    <Link className="navbar-brand text-white" to={"/Home"}>Home</Link>
                    <Link className="navbar-brand text-white" to={"/Posts"}>Posts</Link>
                </form>
                <Link className="navbar-brand text-white" to={"/Login"}>Login</Link>
            </nav>
            <main style={{ marginTop: '60px' }}>
                <Outlet />
            </main>
        </>
    )
}