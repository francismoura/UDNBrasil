import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import University from './views/University';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={University} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;