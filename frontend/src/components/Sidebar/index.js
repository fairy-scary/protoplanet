import { slide as Menu } from "react-burger-menu";
import './Sidebar.css';
import { useSelector } from 'react-redux';
import LoggedInUserContainer from '../LoggedInUserContainer'
import {Link} from 'react-router-dom';
import LoginFormModal from '../LoginFormModal';

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
          <LoginFormModal />
        </>
      );
    }

  return (
    <Menu {...Sidebar}>
        {isLoaded && sessionLinks}
        <br/>
        <h2>CONTINENTS</h2>
      <Link className="menu-item" to="/feeds/cottagedam">
      🌳 Cottagedam 🌳</Link>
      <Link className="menu-item" to="/feeds/alchemis">
      💎 Alchemis 💎</Link>
      <Link className="menu-item" to="/feeds/liminaland">
      🌪️ Liminaland 🌪️</Link>
      <Link className="menu-item" to="/feeds/bubblebopia">
      🛼 Bubblebopia 🛼</Link>
      <Link className="menu-item" to="/feeds/yesterway">
      🕰️ Yesterway 🕰️</Link>
      <Link className="menu-item" to="/feeds/voidend">
      🌑 Voidend 🌑</Link>
      <Link className="menu-item" to="/feeds/honeydoe">
      🍯 Honeydoe 🍯</Link>
    </Menu>
  );
};

export default Sidebar