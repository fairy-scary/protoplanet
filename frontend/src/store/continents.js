import { fetch } from "./csrf.js";

const SET_COTTAGEDAM_POSTS = "continents/setCottagedamPosts";

const setCottagedamPosts = (posts) => {
    return{
        type: SET_COTTAGEDAM_POSTS,
        posts: posts,
    };
};

export const fetchCottagedamPosts = () => {
    return async (dispatch) => {
        const res = await fetch("/api/feeds/cottagedam");
        dispatch(
            setCottagedamPosts(res.data.cottagedamPosts)
        );
        console.log(res.data.cottagedamPosts)
    };

};

const initialState = [];

function reducer(state = initialState, action) {
    switch (action.type) {
      case SET_COTTAGEDAM_POSTS:
        return action.posts; 
      default:
        return state;
    }
}

export default reducer