import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import University from './views/university/University';
import Home from './views/home/Home';

function Routes() {

    return (

        <BrowserRouter>

            <Switch>

                <Route exact path="/">
                    <Redirect to="/api" />
                </Route>
                <Route path="/api" exact component={Home} />
                <Route path="/api/universidades" exact component={University} />

            </Switch>

        </BrowserRouter>

    );

}

export default Routes;
