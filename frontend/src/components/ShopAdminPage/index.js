import {useEffect} from "react"; 
import {useDispatch, useSelector} from "react-redux";
import {myShopInfo} from "../../store/shops";
import "../Continents/continents.css";
import "./shop-admin.css";

// Lots to add - CRUD features, post listing, new post form gateway

const ShopOverview = ({shop}) => {
    
    return (
        <>
            <h4>Your shop is called:</h4>
            <button className="log-out">Edit Shop Name</button>
            <h3>{shop.shopName}</h3>
            <button className="log-out">Edit Avatar</button><br/>
            <img src={shop.awsUrl} width="200px" alt="test" /><br/>
            
            <h4>Names of this shop's makers:</h4>
            <button className="log-out">Edit Maker Names</button>
            <p>{shop.makerName}</p>
            <h4>Shop Bio</h4>
            <button className="log-out">Edit Shop Bio</button>
            <p>{shop.shopBio}</p>
        </>
    );
};

const ShopAdminPage = () => {

    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user.id);
    const shopInfo = useSelector(state => state.shops[0]);
    console.log(userId)

    useEffect(() => {
        dispatch(myShopInfo(userId));  
    }, [dispatch, userId]);

    return (
    <div className="shop-admin">
    <h1>Shop Admin Page</h1>
    {shopInfo && <ShopOverview shop={shopInfo} />}
    {!shopInfo && <h3>Loading...</h3>}
    <button className="log-out">Product Guide</button>
    <button className="log-out">New Post</button>
    <button className="log-out">Pending Orders</button>
    <button className="log-out">Archive</button>
    
    </div>
    );
};

export default ShopAdminPage