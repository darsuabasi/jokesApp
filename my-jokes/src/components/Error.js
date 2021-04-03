import React from 'react';
import { useHistory } from 'react-router-dom';
// import Typing from 'react-typing-animation';
import './css/Error.css'

const Error = () => {
    const history = useHistory();

  return (
    <div className="errorHandlingMain"> 
        <div className="subOneError">
            <div className="subDivForError"> 
                <h1 className="message"> 
                  {/* <Typing className="typingBody"> */}
                    <h1 className="errorStatement">  Whoa, you've found an empty room in this studio.</h1>
                    <button className="errBtn one" onClick={() => history.push(`/`)}> Head Home </button>
                    <button className="errBtn two" onClick={() => history.push(`/dashboard`)}> Dashboard </button>
                  {/* </Typing> */}
                </h1>
            </div>
        </div>
    </div>  
  )
}


export default Error;