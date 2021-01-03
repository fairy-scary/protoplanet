import {useEffect} from "react"; 
import {useDispatch, useSelector} from "react-redux";
import {myShopInfo} from "../../store/shops";

const ShopOverview = ({shop}) => {
    
    return (
        <>
            <h3>{shop.shopName}</h3>
            <img src={shop.awsUrl} width="500px" alt="test" />
            <p>{shop.makerName}</p>
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
    }, [dispatch]);

    return (
    <>
    <h1>Shop Admin Page</h1>
    {shopInfo && <ShopOverview shop={shopInfo} />}
    {!shopInfo && <h3>Loading...</h3>}
    </>
    );
};

export default ShopAdminPage