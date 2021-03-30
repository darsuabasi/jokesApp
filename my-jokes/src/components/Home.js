import React from 'react';
import { useHistory } from 'react-router-dom';
import './css/Home.css'


export const Home = () => {
    const history = useHistory();
    return (
        <div className="home-main-div"> 
            <button className="enterWorldBtn" onClick={() => history.push(`/dashboard${history.location.pathname}`)}>Enter the World of Epic Dad Jokes</button>
        </div>
    )
}

export default Home