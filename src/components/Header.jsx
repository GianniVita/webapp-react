import { NavLink } from "react-router-dom";
import NavigationBar from "./NavigationBar";
export default function Header() {

    const menu = [
        {
            id: 1,
            text: 'Home',
            link: '/',
            icon: 'bi-house-door'
        },
        {
            id: 2,
            text: 'Contact',
            link: '/contacts',
            icon: 'bi-envelope'
        }
    ]

    return (
        <header>
            <NavigationBar menu={menu} />
        </header>
    );
}








