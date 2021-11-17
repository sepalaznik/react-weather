import React from 'react';
import { Route, Switch } from 'react-router';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';

function App() {
    return (
        <div className="container">
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
            </Switch>
        </div>
    );
}

export default App;