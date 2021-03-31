import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";

const SearchJokes = () => {

    const history = useHistory();
    const term = useParams();
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
        debugger
        history.push(`/dashboard/search-jokes/results/${sessionStorage.term}`);
        sessionStorage.term = e.target.elements[0].value
    }

    useEffect(()=>{
        fetchData(`https://icanhazdadjoke.com/search/`, setList);
    }, [])


    return (
        <div className="searcjokes-main-div">

            <div className="serachjokes-header-div">
                <h1>
                    Search Jokes Here!
                </h1>
            </div>

            <div className="serachjokes-search-div">
                <form onSubmit={handleSearch}>
                    <input list="hashtagit" className="user-nav-search" placeholder="Search for jokes" value={search} type="text" onChange={handleChange}/>
                    {displaySuggestion()}
                    {/* <button className="user-nav-search-btn" type="submit"> Search Tags </button> */}
                </form>
            </div>
            
        </div>
    )
}

export default SearchJokes
