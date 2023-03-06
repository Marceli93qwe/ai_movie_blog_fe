import "./navbar.css"
import {DesktopNavbar} from "./DesktopNavbar/DesktopNavbar";
import {MobileNavbar} from "./MobileNavbar/MobileNavbar";

export const Navbar = () => {
    return (
        <>
            <nav className="navbar mobile">
                <MobileNavbar/>
            </nav>
            <nav className="navbar desktop">
                <DesktopNavbar/>
            </nav>
        </>
    )
}