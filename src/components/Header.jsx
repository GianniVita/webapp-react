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
            text: 'Movies',
            link: '/movies',
            icon: 'bi-film'
        },
        {
            id: 3,
            text: 'Contact',
            link: '/contacts',
            icon: 'bi-envelope'
        },
        {
            id: 4,
            text: 'Admin',
            link: '/admin',
            icon: 'bi-person-gear'
        }
    ]

    return (
        <header>
            <NavigationBar menu={menu} />
        </header>
    );
}








