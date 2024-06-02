import Box from "../assets/img/box.png";

function Navbar() {
    return (
        <nav>
            <ul className="navbar">
                <li>
                    <img src={Box} alt="" />
                </li>
                <li>Home</li>
                <li>Panduan</li>
                <li>
                    <img src={Box} alt="" />
                </li>
            </ul>
        </nav >
    );
}

export default Navbar;
