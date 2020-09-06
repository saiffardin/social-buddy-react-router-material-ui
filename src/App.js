import React, { createContext, useState, useEffect } from 'react';


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

    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {

                setAllPosts(data);
                // console.log(allPosts);
            })
    }, [])



    // console.log(allPosts);
    return (

        <Router>

            <Switch>

                <Route exact path="/">
                    <AllPost allPosts={allPosts}></AllPost>
                </Route>

                <Route path="/home">
                    <AllPost allPosts={allPosts}></AllPost>
                </Route>

                <Route path="/post/:postId">
                    <PostDetail allPosts={allPosts}></PostDetail>
                </Route>

                <Route path="*">
                    <NoMatch></NoMatch>
                </Route>

            </Switch>

        </Router>


    );
}

export default App;
