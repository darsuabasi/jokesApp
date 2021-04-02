import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import RandomJokes from './components/Jokes/RandomJokes';
import TrendingGifs from './components/Jokes/TrendingGifs';
import SearchJokes from './components/Jokes/SearchJokes';
import JokeResults from './components/Jokes/JokeResults';
import imageData from './data/imageData.js';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';


const App = () => {

  const queryClient = new QueryClient()

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}> 
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

                  <Route exact path={"/dashboard/trending-gifs"}>
                    <TrendingGifs/>
                  </Route>

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
      </QueryClientProvider>
    </div>
  )
}

export default App;





// https://github.com/darsuabasi/jokesApp.git





