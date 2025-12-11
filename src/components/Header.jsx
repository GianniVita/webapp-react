import { NavLink } from "react-router-dom";
import NavigationBar from "./NavigationBar";
export default function Header() {
    
    const menu = [
        {
            id: 1,
            text: 'Home',
            link: '/'
        },
        {
            id: 2,
            text: 'Contact',
            link: '/contacts'
        }
    ]
  
    return (
        <header>
            <NavigationBar menu={menu} />
        </header>
    );
}

           
    
    
    
    
    
    
