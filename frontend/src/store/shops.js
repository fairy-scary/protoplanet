import { fetch } from "./csrf.js";

const ADD_SHOP = "user/ADD_SHOP";
const REMOVE_SHOP = "user/REMOVE_SHOP";

export const setShop = (shopData) => {
    return {
     type: ADD_SHOP,
     shopData: shopData,
    };
};

export const addShop = () => {
    return async (dispatch) => {
        const res = await fetch("api/shop/createshop", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            // body: JSON.stringify(shop) // body data type must match "Content-Type" header
          });
        dispatch(
            setShop(res.data.shop)
        );
        console.log(res.data.shop)
    };
};

const initialState = [];

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SHOP:
            return action.shopData;
        default:
            return state;
    };
};

export default reducer