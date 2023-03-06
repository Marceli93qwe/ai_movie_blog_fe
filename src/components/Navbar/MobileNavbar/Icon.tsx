import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons'
import "./icon.css"

interface Props {
    click: () => void;
    option: boolean;
}

export const Icon = (props: Props) => {
    return (
        <a className="icon" onClick={props.click}>
            {
                props.option ?
                    <FontAwesomeIcon icon={faXmark}/>
                    :
                    <FontAwesomeIcon icon={faBars}/>

            }
        </a>

    )
}