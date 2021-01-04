import { fetch } from './csrf.js';

const SET_USER = "user/SET_USER";

const setUserInfo = (payload) => { 
    return{
        type: SET_USER,
        payload
    };
};

export const fetchUserInfo = (id) => {
    return async (dispatch) => {
        const res = await fetch(`/api/users/${id}`);
        dispatch(
            setUserInfo(res.data.user)
        );
        console.log(res.data.user)
    };

};

const initialState = [];

function reducer(state = initialState, action) {
    switch (action.type) {
      case SET_USER:
        return action.payload; 
      default:
        return state;
    };
};

export default reducer

