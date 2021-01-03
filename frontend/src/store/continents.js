import { fetch } from "./csrf.js";

// const SET_COTTAGEDAM_POSTS = "continents/setCottagedamPosts";
const SET_CONTINENT = "continents/setContinents";

// const setCottagedamPosts = (posts) => { 
//     return{
//         type: SET_COTTAGEDAM_POSTS,
//         posts: posts,
//     };
// };

const setContinent = (posts) => {
    return {
        type: SET_CONTINENT,
        posts: posts
    }
}

export const fetchContinent = (continentId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/feeds/${continentId}`);
        dispatch(setContinent(res.data.continentPosts))
        console.log(res.data.continentPosts)
    }
}

// export const fetchCottagedamPosts = () => {
//     return async (dispatch) => {
//         const res = await fetch("/api/feeds/cottagedam");
//         dispatch(
//             setCottagedamPosts(res.data.cottagedamPosts)
//         );
//         console.log(res.data.cottagedamPosts)
//     };

// };

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