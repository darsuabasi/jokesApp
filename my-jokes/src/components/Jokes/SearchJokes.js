import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import './../css/Searchjokes.css';

const SearchJokes = () => {

    const history = useHistory();
    // const term = useParams();
    const [list, setList] = useState([]);
    const [suggestion, setSuggestion] = useState([]);
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        let suggestion = [];
        if(value.length > 0){
            const regex = new RegExp(`${value}`,`i`);
            suggestion = list.sort().filter(v=>regex.test(v));
        }
        setSuggestion(suggestion);
        setSearch(value)
    }

    const handleSelect = (value) => {
        setSearch(value);
        setSuggestion([])
    }

    const displaySuggestion = () => {
        if(suggestion.length === 0) {
            return null
        } else {
            return (
                <div className="styleSuggestionDiv">
                    <datalist id="hashtagit" className="styleSuggestions" style={{width:"50rem"}}>
                        {suggestion.slice(0,5).map((item)=><option className="styleSussestionLi" key={item} value={item} onClick={()=> handleSelect(item)}>{item}</option>)}
                    </datalist>
                </div>
            )
        }
    }

    const fetchData = async (setData) => {
        let res = await axios.get(`https://icanhazdadjoke.com/search`,
        {
            headers: {
                'Accept': 'application/json'
            }}
            )
            try {
                res.data.results.map((el) => {
                    // return setData(prevState => [...prevState, el.term])
                })
            } catch (err) {
                console.log(err)
            }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`/dashboard/search-jokes/results/${sessionStorage.term}`);
        sessionStorage.term = e.target.elements[0].value
    }

    useEffect(()=>{
        fetchData(`https://icanhazdadjoke.com/search/`, setList);
    }, [])


    return (
        <div className="searchjokes-main-div">

            <div className="searchjokes-header-div">
                <h1 className="searchjokes-header">
                    Care for some more jokes?
                </h1>
            </div>

            <div className="searchjokes-search-div">
                <form onSubmit={handleSearch}>
                    <input list="hashtagit" className="searchjokes-search" placeholder="Enter a keyword" value={search} type="text" onChange={handleChange}/>
                </form>

                <div className="suggestion-div">
                    {displaySuggestion()}
                </div>
            </div>
            
        </div>
    )
}

export default SearchJokes
