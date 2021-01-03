import {useEffect} from "react"; 
import {useDispatch, useSelector} from "react-redux";
import {fetchUserInfo} from "../../store/user";
import {Link} from "react-router-dom"

const LoggedInUserContainer = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user);
    console.log(user)

    useEffect(() => {
        dispatch(fetchUserInfo(user.id));  
    }, [dispatch]);

    return (
    <div>
    {user && 
        <div>
            <div id="logged-in-box">
            <h4>Logged in as:</h4>
            <h5>{user.username}</h5>
            </div>
            <div id="logged-in-menu">
            <h2>+ Favorites</h2>
            <Link to="/feed">Feed</Link>
            <Link to="/shopindex">Index</Link>
            <Link to="/orders">My Orders</Link>
            </div>
            <div>
            <div>
            {user.shopId && 
            <Link to ="/admin">Shop Admin</Link>}
            {!user.shopId &&
            <Link to="/createShop">Create Shop</Link>}
            </div>
            </div>
        </div>}
    {!user && <h3>Loading...</h3>}
    </div>
    );
};

export default LoggedInUserContainer