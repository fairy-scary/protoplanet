import { fetch } from "./csrf.js";

const SET_NEW_SHOP = "user/SET_NEW_SHOP";
const SET_MY_SHOP = "user/SET_MY_SHOP";
// const REMOVE_SHOP = "user/REMOVE_SHOP";
// const POPULATE_SHOP="user/POPULATE_SHOP"

export const setNewShop = (shopData) => {
    return {
     type: SET_NEW_SHOP,
     shopData: shopData,
    };
};

export const setMyShop = (payload) => {
    return {
        type: SET_MY_SHOP,
        payload,
    }
}

export const myShopInfo = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/shop/${userId}`);
        dispatch(setMyShop(res.data.myShop));
        console.log(res.data.myShop)
    }
}

export const addShop = (shopData) => {
    return async (dispatch) => {
            await fetch("api/shop/createshop", {
            method: 'POST',
            body: JSON.stringify(shopData),
        });
        dispatch(setNewShop(shopData))
        //return await res.json();
    };
};

const initialState = [];

function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_NEW_SHOP:
            return action.shopData;
        case SET_MY_SHOP:
            return action.payload;
        default:
            return state;
    };
};

export default reducer