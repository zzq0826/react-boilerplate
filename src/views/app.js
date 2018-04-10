import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { hot } from 'react-hot-loader'

import Home from './Home';
import Welcome from './Welcome';
import Test from './Test';

const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/welcome">欢迎页</Link></li>
                <li><Link to="/test">测试页</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/welcome" component={Welcome}/>
                <Route path="/test" component={Test}/>
            </Switch>
        </div>
    </Router>
);

export default App