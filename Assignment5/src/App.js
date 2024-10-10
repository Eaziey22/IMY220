import React from "react";
import ReactDOM from "react-dom/client";
import StarWars from './components/StarWars'

class App extends React.Component{
    render(){
        return (
            <div>
                <StarWars/>
            </div>
        );
    };
}

export default App;