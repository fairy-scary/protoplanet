import { fetch } from "./csrf.js";

const SET_CONTINENT = "continents/setContinents";

const setContinent = (posts) => {
    return {
        type: SET_CONTINENT,
        posts: posts
    };
};

export const fetchContinent = (continentId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/feeds/${continentId}`);
        dispatch(setContinent(res.data.continentPosts));
        console.log(res.data.continentPosts);
    };
};

const initialState = [];

function reducer(state = initialState, action) {
    switch (action.type) {
      case SET_CONTINENT:
        return action.posts; 
      default:
        return state;
    }
}

export default reducer