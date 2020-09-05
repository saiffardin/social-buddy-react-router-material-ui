import React, { useState, useEffect } from 'react';

import './AllPosts.css';
import EachPost from '../EachPost/EachPost';


const AllPost = () => {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAllPosts(data);
            })
    }, [])

    const showMoreHandler = (post) => {
        console.log(`clicked on : post id - ${post.id}`);
    };

    return (
       
            <div className="main-div">
                {/* <h1>All Post</h1> */}

                {
                    allPosts.map(post =>
                        <EachPost
                            key={post.id}
                            post={post}
                            showMoreHandler={() => showMoreHandler(post)}
                        ></EachPost>
                    )
                }
            </div>
        
            
        
        

    );
};

export default AllPost;