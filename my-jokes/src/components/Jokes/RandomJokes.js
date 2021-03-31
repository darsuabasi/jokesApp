import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import '../css/Randomjokes.css'

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
                <h1 className="style-rj-header">
                    Let's laugh together 
                </h1>
            </div>

            {/* <div className="randomjoke-randomize-div"> 
                <form onSubmit={getRandomJoke}>
                    <button type="submit">
                    Random Joke
                    </button>
                </form>
            </div> */}

            <div className="randomjoke-display-div">
                {/* text view */}
                <div className="joke-card"> 
                    <div className="joke-card-sub"> 
                        <p className="joke-para"> {randomJoke} </p>
                    </div>

                    <div className="joke-card-btn-div">
                        {/* <form onSubmit={getRandomJoke}> */}
                            <button type="submit" className="style-joke-btns"> Image </button>
                            <button onClick={getRandomJoke} type="submit" className="style-joke-btns2"> Random Joke </button>
                            <button type="submit" className="style-joke-btns"> Slack Version </button>
                        {/* </form>  */}

                    </div>
                </div>

                {/* image view */}
                {/* <img src={`https://icanhazdadjoke.com/j/${jokepicID}.png`}/> */}
            </div>        
        </div>
    )
}

export default RandomJokes
