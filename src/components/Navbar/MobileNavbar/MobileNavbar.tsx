import {Icon} from "./Icon";
import {Title} from "../shared/Title";
import {OpenMobileMenu} from "./OpenMovileMenu/OpenMobileMenu";
import {useState} from "react";

export const MobileNavbar = () => {
    const [displayedMenu, setDisplayedMenu] = useState(false);
    const toggleDisplayedMenu = () => setDisplayedMenu((prev) => !prev);
    return (
        <>
            <Icon
                option={displayedMenu}
                click={toggleDisplayedMenu}
            />
            <Title/>
            <OpenMobileMenu displayed={displayedMenu} toggleDisplay={toggleDisplayedMenu}/>
        </>
    )
}