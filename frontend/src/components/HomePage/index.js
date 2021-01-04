import {useEffect} from 'react';
import './home.css'

const HomePage = () => {

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("/api/feeds/continents");
            console.log(res.data)
          }
          fetchData();
        }, []);
        
           
    

    return (
        <div id="homepage-container">
            <div id="logo">
            PROTOPLANET
            </div>
            
        </div>
    )


};

export default HomePage