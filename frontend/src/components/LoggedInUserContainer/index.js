import {useEffect} from "react"; 
import {useDispatch, useSelector} from "react-redux";
import {fetchUserInfo} from "../../store/user";
import {Link} from "react-router-dom";
import * as sessionActions from '../../store/session';
import '../Sidebar/Sidebar.css'

const LoggedInUserContainer = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user);
    console.log(user)

    useEffect(() => {
        dispatch(fetchUserInfo(user.id));  
    }, [dispatch]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
      };

    return (
    <div>
    {user && 
        <div>
            <div id="logged-in-box">
            <h4>Logged in as:</h4>
            <h5>{user.username}</h5>
            </div>
            <div id="logged-in-menu">
            <h2>USER MENU</h2>
            <Link className="menu-item" to="/feed">Feed</Link> <br/>
            <Link className="menu-item" to="/shopindex">Index</Link> <br/>
            <Link className="menu-item" to="/orders">My Orders</Link> <br/>
            </div>
            <div>
            <div>
            <Link className="menu-item" to="/admin">Shop Admin</Link> <br/>
            {/* Ran into db issue with ternery */}
            <Link className="menu-item" to="/createShop">Create Shop</Link>
            </div>
            <button onClick={logout} className="log-out">Log Out</button>
            </div>
        </div>}
    {!user && <h3>Loading...</h3>}
    </div>
    );
};

export default LoggedInUserContainer