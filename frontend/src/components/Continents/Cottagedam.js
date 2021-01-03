import {useEffect} from "react"; 
import {useDispatch, useSelector} from "react-redux";
import {fetchCottagedamPosts} from "../../store/continents";


const Post = ({thePost}) => {

    return ( 
        <div>
            <h3>{thePost.title}</h3>
            <img src={thePost.awsUrl} width="500px" alt="test" />
            <p>{thePost.body}</p>
        </div>
    );
};

const Cottagedam = () => {

    const dispatch = useDispatch()
    const currentPosts = useSelector(state => state.continents);
    console.log(currentPosts)
    
    useEffect(() => { 
        dispatch(fetchCottagedamPosts());
    }, [dispatch]);

    return (
    <div id="continent-feed">
    <h1>Cottagedam</h1>
    {!currentPosts && <h3>Loading...</h3>}
    {currentPosts && currentPosts.map(post => {
        return <Post thePost={post} />;
    })}
    </div>
    );
};

export default Cottagedam;