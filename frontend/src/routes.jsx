import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import UniversityExternal from './views/UniversityExternal';
import Home from './views/Home'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <Redirect to="/api/universidades" />
                </Route>

                <Route path="/api/universidades" exact component={Home} />

                <Route path="/api/universidades/externa" exact component={UniversityExternal} />

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;