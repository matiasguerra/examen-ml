import React from 'react';
import { BrowserRouter, Switch, Route }from 'react-router-dom';
import './app.scss';

import Home from './home/Home';
import Results from './results/Results';
import Detail from './detail/Detail';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route exact path="/items" component={Results} />
                    <Route exact path="/items/:id" component={Detail} />
                    <Route component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
