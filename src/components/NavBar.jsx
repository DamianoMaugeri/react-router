import { NavLink } from "react-router-dom";

export default function NavBar() {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/aboutme'>About Me</NavLink>
                </li>
                <li>
                    <NavLink to='/posts'>Posts</NavLink>
                </li>
            </ul>
        </nav>
    )

}