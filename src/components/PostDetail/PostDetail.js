import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    let { postId } = useParams();
    const [postDetail, setPostDetail] = useState([]);

    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPostDetail(data);
            })
    }, [])

    return (
        <div>
            <h1>Post Detail Page</h1>

            <h2>Post ID : {postId}</h2>
            <h2>Total Comments: {postDetail.length}</h2>

            

            {
                postDetail.map(post => <Comment key={post.id} post={post}></Comment>)
            }
        </div>
    );
};

export default PostDetail;