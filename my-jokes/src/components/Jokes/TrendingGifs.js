import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery } from "react-query";
import './../css/Trendinggifs.css';
import Spinner from '../Spinner';

const TrendingGifs = () => {
    const history = useHistory();
    const [gifs, setGifs] = useState([]);
    let APIKEY = "iSplCwH6SvOi40KftTYY6f1pFsVYGbOo"; 

    const { isLoading, error, data: gifData, isFetching } = useQuery("repoData", () =>
        fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=500`
        ).then((res) => res.json())
    );

    if (isLoading) return <Spinner/>;

    if (error) return "An error has occurred: " + error.message;


    const renderGifs = () => {
        if (isLoading) {
            return <Spinner/>;
        }

        return gifData.data.map(el => {
            return (
                    <>
                        <div>{isFetching ? <Spinner/> : ""}</div>
                        <img className="singleGif" src={el.images.fixed_height.url} />
                    </>
                );
            });
        };

    return (
        <div className="main-trendinggifs">
            <div className="trendinggifs-leftdiv"> 
                <div className="trendinggifs-header"> 
                    <h1>
                    Woohooo GIFS
                    </h1>
                </div>

                <div className="trendinggifs-deck"> 
                    <div className="trendinggifs-card"> 
                        {renderGifs()}
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default TrendingGifs;
