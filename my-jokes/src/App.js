import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';


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
                
              </Switch>
            </div>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
