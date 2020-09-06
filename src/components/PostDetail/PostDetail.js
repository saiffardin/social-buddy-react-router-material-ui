import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import EachPost from '../EachPost/EachPost';

const PostDetail = (props) => {
    const { allPosts } = props;
    // console.log(allPosts);

    let { postId } = useParams();
    const [postComments, setPostComments] = useState([]);
    

    const myStyle = {

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",

    }

    let particularPost = allPosts.find( post => (post.id) === Number(postId));
    console.log(particularPost);

    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setPostComments(data);
            })
    }, [])

    

    

    return (
        <div style={myStyle}>
            <h1>Post Detail Page</h1>

            {/* <h2>Post ID : {postId}</h2> */}
            <h2>Post</h2>

            <EachPost post = {particularPost}></EachPost>

            <h2>Total Comments: {postComments.length}</h2>
            {
                postComments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;