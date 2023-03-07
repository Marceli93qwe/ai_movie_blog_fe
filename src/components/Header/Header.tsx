import "./header.css"
import {Title} from "../Navbar/shared/Title"

export const Header = () => {
    return (
        <div className={"header"}>
            <Title/>
            <h2>
                Let us guide through the world of film
            </h2>
            <h3>Discover the best movies with us - each review is a guarantee of a good choice.
            </h3>
        </div>
    )
}