import { slide as Menu } from "react-burger-menu";
import './Sidebar.css';
import { useSelector } from 'react-redux';
import LoggedInUserContainer from '../LoggedInUserContainer'
import {Link} from 'react-router-dom';

const Sidebar = ({isLoaded}) => {
    const sessionUser = useSelector(state => state.session.user);
    console.log(sessionUser)

    let sessionLinks;
    if (sessionUser) {
      sessionLinks = (
        <LoggedInUserContainer />  
        // <ProfileButton user={sessionUser} />
      );
    } else {
      sessionLinks = (
        <>
          <Link to="/signup">Sign Up</Link>
        </>
      );
    }

  return (
    <Menu {...Sidebar}>
        {isLoaded && sessionLinks}
        
        <h2>+ Protoplanet Continents</h2>
      <a className="menu-item" href="/feeds/cottagedam">
      🌳 Cottagedam 🌳</a>
      <a className="menu-item" href="/feeds/alchemis">
      💎 Alchemis 💎</a>
      <a className="menu-item" href="/feeds/liminaland">
      🌪️ Liminaland 🌪️</a>
      <a className="menu-item" href="/feeds/bubblebopia">
      🛼 Bubblebopia 🛼</a>
      <a className="menu-item" href="/feeds/yesterway">
      🕰️ Yesterway 🕰️</a>
      <a className="menu-item" href="/feeds/voidend">
      🌑 Voidend 🌑</a>
      <a className="menu-item" href="/feeds/honeydoe">
      🍯 Honeydoe 🍯</a>
    </Menu>
  );
};

export default Sidebar