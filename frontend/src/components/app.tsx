import {hot} from 'react-hot-loader/root';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'assets/scss/site.scss';

import SiteLayout from 'layouts/profile';
import BlogLayout from 'layouts/blog';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/blog" component={BlogLayout}/>
            <Route path="*" component={SiteLayout}/>
        </Switch>
    </BrowserRouter>
);

export default hot(App);
