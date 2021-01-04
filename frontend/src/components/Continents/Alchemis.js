import {useEffect} from "react"; 
import {useDispatch, useSelector} from "react-redux";
import {fetchContinent} from "../../store/continents";
import './continents.css';

const Post = ({thePost}) => {

    return ( 
        <div id="post">
            <h3>{thePost.title}</h3>
            <img src={thePost.awsUrl} width="500px" alt="test" />
            <p>{thePost.body}</p>
        </div>
    );
};

const Alchemis = () => {

    const dispatch = useDispatch()
    const currentPosts = useSelector(state => state.continents);
    console.log(currentPosts)
    
    useEffect(() => { 
        dispatch(fetchContinent(9));
    }, [dispatch]);

    return (
    <div id="alchemis">
    <h1>Alchemis</h1>
    {!currentPosts && <h3>Loading...</h3>}
    {currentPosts && currentPosts.map(post => {
        return <Post thePost={post} />;
    })}
    </div>
    );
};

export default Alchemis;