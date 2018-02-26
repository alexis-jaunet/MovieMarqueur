import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Description from "./pages/Description";

class App extends React.Component {
    render () {
        return (
            <Router>
                <Route path='/' render={() => <Homepage />} />
                <Route path='/movie' render={() => <Description />} />
            </Router>
        );
    }
}

export default App;