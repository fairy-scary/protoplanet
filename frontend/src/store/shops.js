import { fetch } from "./csrf.js";

const ADD_SHOP = "user/ADD_SHOP";
const REMOVE_SHOP = "user/REMOVE_SHOP";

export const setShop = (shopData) => {
    return {
     type: ADD_SHOP,
     shopData: shopData,
    };
};

export const addShop = (shopData) => {
    return async (dispatch) => {
        const res = await fetch("api/shop/createshop", {
            method: 'POST',
            body: JSON.stringify(shopData),
        });
        dispatch(setShop(shopData))
        //return await res.json();
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