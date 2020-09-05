import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './App.css';
import AllPost from './components/AllPosts/AllPost';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';


function App() {

    return (

        <Router>

            <Switch>

                <Route exact path="/">
                    <AllPost></AllPost>
                </Route>

                <Route path="/home">
                    <AllPost></AllPost>
                </Route>

                <Route path="/post/:postId">
                    <PostDetail></PostDetail>
                </Route>

                <Route path="*">
                    <NoMatch></NoMatch>
                </Route>

            </Switch>

        </Router>


    );
}

export default App;
