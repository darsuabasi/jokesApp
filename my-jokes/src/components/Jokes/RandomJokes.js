import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const RandomJokes = () => {
    // const history = useHistory();  going anywhere from this page??
    // const { joke_id } = useParams(); didnt need it since we're keying id from api
    const [randomJoke, setRandomJoke] = useState([]);
    const [jokepicID, setJokePicID] = useState([]);

    const getRandomJoke = async () => {
        try {
            debugger
            let res = await axios.get(`https://icanhazdadjoke.com/`,
            {
                headers: {
                  'Accept': 'application/json'
                }}
            );
            setRandomJoke(res.data.joke)
            // let res = await axios.get(`https://icanhazdadjoke.com/j/${joke_id}.png`);
            setJokePicID(res.data.id)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(getRandomJoke, [])


    return (
        <div className="randomjoke-main-div">
            <div className="randomjoke-header-div"> 
                <h1>
                Let's Randomize This ;)
                </h1>
            </div>

            <div className="randomjoke-randomize-div"> 
                <form onSubmit={getRandomJoke}>
                    <button type="submit">
                    New Random Joke
                    </button>
                </form>
            </div>

            <div className="randomjoke-display-div">
                {/* text view */}
                <p> {randomJoke} </p>

                {/* image view */}
                <img src={`https://icanhazdadjoke.com/j/${jokepicID}.png`}/>
            </div>        
        </div>
    )
}

export default RandomJokes
