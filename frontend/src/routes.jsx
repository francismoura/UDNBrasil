import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import UniversityExternal from './views/UniversityExternal';
import University from './views/University';
import Home from './views/Home'

function Routes() {

    return (

        <BrowserRouter>

            <Switch>

                <Route exact path="/">
                    <Redirect to="/api" />
                </Route>

                <Route path="/api" exact component={Home} />

                <Route path="/api/universidades/externa" exact component={UniversityExternal} />

                <Route path="/api/universidades" exact component={University} />

            </Switch>

        </BrowserRouter>

    );

}

export default Routes;
