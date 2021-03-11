import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';

import { BrowserRouter, Route, Switch } from "react-router-dom"
import Menement from './Components/Contact/Menement';
import Home from './Components/Home';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header></Header>
                <Switch>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/menement" component={Menement} ></Route>
                </Switch>
            </div>
        </BrowserRouter>

    );
}

export default App;
