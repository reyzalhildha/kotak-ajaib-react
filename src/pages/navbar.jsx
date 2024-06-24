import Box from "../assets/img/box.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-ul">
                <div className="left-navbar">
                    <img src={Box} alt="" />
                </div>
                <div className="right-navbar">
                    <a href="/">Home</a>
                    <a href="/peraturan">Kotak Ajaib!</a>
                    <img src={Box} alt="" />
                </div>
            </div>
        </nav >
    )
}

export default Navbar;
