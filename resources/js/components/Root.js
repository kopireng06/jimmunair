import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import loadable from '@loadable/component'
import Navbar from './Navbar';
import 'jquery';

function Root() {
    const Home = loadable( ()=>import('./Home') )
    const Tentang = loadable( ()=>import('./Tentang') )
    return (
        <Router>
            <div className="row root">
                <div className="col-md-12 root">
                    <Navbar/>
                    <Route path="/tentang" component={Tentang}></Route>
                </div>
            </div>
            <Route exact path="/" component={Home}></Route>
        </Router>
    );
}

export default Root;
ReactDOM.render(<Root />,document.getElementById('body'));