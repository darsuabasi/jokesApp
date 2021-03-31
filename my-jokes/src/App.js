import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import RandomJokes from './components/Jokes/RandomJokes';
import ImageJokes from './components/Jokes/ImageJokes';
import RandomJokeSlack from './components/Jokes/RandomJokeSlack';
import SearchJokes from './components/Jokes/SearchJokes';
import JokeResults from './components/Jokes/JokeResults';
import imageData from './data/imageData.js';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
              <Home/>
          </Route>

            <div className="sub-app">
              <Navbar/> 

              <Switch>
                <Route exact path={"/dashboard"}>
                  {/* dont need to pass ass prop anymore since adding manually due to 3 cubes*/}
                  <Dashboard dadImages={imageData}/>
                </Route>

                <Route exact path={"/dashboard/random-jokes"}>
                  <RandomJokes/>
                </Route>

                {/* <Route exact path={"/dashboard/image-jokes"}>
                  <ImageJokes/>
                </Route> */}

                {/* <Route exact path={"/dashboard/slack-random-jokes"}>
                  <RandomJokeSlack/>
                </Route> */}

                <Route exact path={"/dashboard/search-jokes"}>
                  <SearchJokes/>
                </Route>

                <Route exact path="/dashboard/search-jokes/results/:sessionStorage">
                  <JokeResults/>
                </Route>
              </Switch>
            </div>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
