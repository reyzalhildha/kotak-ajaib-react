import Box from "../assets/img/box.png";
import Profile from "../assets/img/profile.svg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-ul">
                <div className="left-navbar">
                    <img src={Box} alt="box" />
                    <a href="/">Kojib</a>
                </div>
                <div className="right-navbar">
                    <a href="/">Home</a>
                    <a href="/peraturan">Peraturan</a>
                    <a href="/kotak-ajaib" style={{marginRight: "4em"}}>Kotak Ajaib!</a>
                    <img src={Profile} alt="Profile" />
                </div>
            </div>
        </nav >
    )
}

export default Navbar;
