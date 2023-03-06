import {Title} from "../shared/Title";
import {BasicLink} from "../shared/BasicLink";
import "./desktop-navbar.css"

function LinksDesktopWrapper() {
    return <div className={"desktop-navbar"}>
        <BasicLink/>
        <BasicLink/>
        <BasicLink/>
        <BasicLink/>
    </div>
}

export const DesktopNavbar = () => {
    return (
        <>
            <LinksDesktopWrapper/>
            <Title/>
        </>
    )
}