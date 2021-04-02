import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import '../css/Randomjokes.css';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { useQuery } from 'react-query';


const RandomJokes = () => {
    let APIKEY = "iSplCwH6SvOi40KftTYY6f1pFsVYGbOo";
    // const history = useHistory();  going anywhere from this page??
    // const { joke_id } = useParams(); didnt need it since we're keying id from api
    const [randomJoke, setRandomJoke] = useState([]);
    const [randomGif, setRandomGif] = useState([]);


    const getRandomJoke = async () => {
        try {
            let res = await axios.get(`https://icanhazdadjoke.com/`,
            {
                headers: {
                  'Accept': 'application/json'
                }}
            );
            setRandomJoke(res.data.joke)
        } catch (err) {
            console.log(err)
        }
    }

    const getRandomGif = async () => {
        try {
            debugger
            let res = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}`);
            setRandomGif(res.data["data"].image_original_url);
        } catch (err) {
            console.log(err)
        } 
    }

    useEffect(getRandomGif, getRandomJoke, [])

    const gifOrJoke = (variant) => {
        if(variant === "getRandomGif") {
            console.log(<p className="joke-para"> {randomJoke} </p>)
        } else {
            return (
                <img className="style-gif-img" src={randomGif}/>
            )
                {/* <p className="joke-para"> {randomJoke} </p> */}
        }
    }

    // const gifOrJoke = (onClick) => {
    //     return onClick === getRandomGif ? <img src={randomGif}/>
    //     : onClick === getRandomJoke ? <p className="joke-para"> {randomJoke} </p>
    // }

    // const gifOrJoke = () =>  {
    //     return getRandomGif ? <img src={randomGif}/> : getRandomJoke ? <p className="joke-para"> {randomJoke} </p>
    // }


    return (
        <div className="randomjoke-main-div">
            <div className="randomjoke-header-div"> 
                <h1 className="style-rj-header">
                    Let's laugh together 
                </h1>
            </div>


            <div className="randomjoke-display-div">
                <div className="joke-card"> 
                    <div className="joke-card-sub"> 
                        <div className="joke-json-div">
                            {gifOrJoke()}
                        </div>
                    </div>

                    <div className="joke-card-btn-div">
                            <button variant="getRandomGif" onClick={getRandomGif} type="submit" className="style-joke-btns"> Random Gif </button>
                            <button variant="getRandomJoke" onClick={getRandomJoke} type="submit" className="style-joke-btns2"> Random Joke </button>
                            {/* <button type="submit" className="style-joke-btns"> Slack Version </button> */}
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default RandomJokes
