import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './../css/Jokeresults.css';

const JokeResults = () => {
    const history = useHistory();
    const [searchResults, setSearchResults] = useState([]);

    useEffect(()=>{

        const fetchSearch = async () => {
            try {
                debugger
                let res = await axios.get(`https://icanhazdadjoke.com/search?term=${sessionStorage.term}`, 
                {
                    headers: {
                        'Accept': 'application/json'
                    }}
                );
                setSearchResults(res.data.results);
            } catch(err) {
                console.log(err);
                }
            };
            fetchSearch();

            if(sessionStorage){
                fetchSearch(`https://icanhazdadjoke.com/search?${sessionStorage}`) 
                searchResult()
            } else {
                fetchSearch(`https://icanhazdadjoke.com/search/`)
            }
        }, [])

        const handleNavigation = (e) => {
            history.push(`/dashboard/search-jokes`)
        }

        // const renderEmptyResults = () => (
            
        //     <div>
        //         <div>
        //             <h1>There are no results for {sessionStorage.term}. Try searching for something else.</h1>
        //         </div>
        //         <div className="backToFeed-btn-div">
        //             <button className="backToFeed-btn" onClick={()=> handleNavigation("searchTerm")}>Return to Search</button>
        //         </div>
        //     </div> 
        // );

        // const renderSearchResults = () => {
        //         <div style={{justifyContent:"center"}}>   
        //             <h1 className="now-viewing" style={{textAlign:"center"}}>Now viewing {sessionStorage.term} jokes! </h1>
        //                 <div>
        //                     <button className="backToFeed-btn" onClick={()=> handleNavigation("searchTerm")}>Return to Search</button>
        //                 </div>
        //         </div>

        // }

        const searchResult = () => {
            if(searchResults.length){
            return (    
                <div className="jokeresults-header-div" style={{justifyContent:"center"}}> 
                    <h1 className="jokeresults-header"> Let's See The Results </h1>  
                    <h1 className="now-viewing" style={{textAlign:"center"}}>Now viewing "{sessionStorage.term}" jokes </h1>
                        <div className="backToSearch-btn-div">
                            <button className="backToSearch-btn" onClick={()=> handleNavigation("searchTerm")}>Return to Search</button>
                        </div>
                </div>
            ) 
            } else {
                return (
                    <div className="non-jokeresults-header-div">
                        <h1 className="non-jokeresults-header"> Search Results </h1>
                        <h1 className="non-now-viewing" >There are no results for "{sessionStorage.term}". Try searching for something else.</h1>
                        <div className="non-backToSearch-btn-div">
                            <button className="non-backToSearch-btn" onClick={()=> handleNavigation("searchTerm")}>Return to Search</button>
                        </div>
                    </div>
                    
                )
            }
        } 

        const displayJokesFromSearch = searchResults.map((joke, i) => {
            return (
                <div key={i} className="results-card">
                    <p className="result-text" key={joke.id}> {joke.joke} </p>
                </div>
            );
        });
       
    return (
        <div className="searchjokes-results-div">
            {searchResult()}
            <div className="searchjokes-results-subdiv">
                <div className="results-deck">
                    {displayJokesFromSearch}
                </div>
            </div>
        </div>
    )
}

export default JokeResults
