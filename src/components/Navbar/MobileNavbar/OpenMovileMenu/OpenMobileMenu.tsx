import "./open-mobile-menu.css"
import {BasicLinksWrapper} from "./BasicLinksWrapper/BasicLinksWrapper";
import {Icon} from "../Icon";

interface Props {
    toggleDisplay: () => void;
    displayed: boolean;
}

export const OpenMobileMenu = (props: Props) => {
    return (
        <div className={"open-mobile-menu"} style={{
            top: `${props.displayed ? "0" : "-100%"}`
        }}>
            <Icon click={props.toggleDisplay} option={props.displayed}/>
            <BasicLinksWrapper/>
        </div>
    )
}