import React, { useState, useEffect } from 'react';

import './AllPosts.css';
import EachPost from '../EachPost/EachPost';
import CardActions from '@material-ui/core/CardActions';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const AllPost = (props) => {

    const { allPosts } = props;
    // console.log(allPosts);

    return (

        <div className="main-div">
            {/* <h1>All Post</h1> */}

            {
                allPosts.map(post =>
                    <EachPost
                        key={post.id}
                        post={post}
                    >
                        <CardActions>

                            <Link to={`/post/${post.id}`}>
                                <Button variant="contained" color="primary" size="small">Show More</Button>
                            </Link>

                        </CardActions>
                    </EachPost>
                )
            }
        </div>





    );
};

export default AllPost;