import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import University from './views/University';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <Redirect to="/api/universidades" />
                </Route>

                <Route path="/api/universidades"  exact component={University} />

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;