import {Component} from "react";
import './App.css';
import DenseAppBar from "./components/NavBar";
import Login from "./components/Login"
import { Dashboard } from "./components/Dashboard"


class App extends Component {
    constructor () {
        super()

        this.state = {
            loggedIn: true,
        }
    }

    render() {
        return (
            <div>
                <header><DenseAppBar /></header>
                {this.state.loggedIn ? <Dashboard /> : <Login />}
            </div>
        );    
    }
}

export default App;
