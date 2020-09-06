import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { CardMedia } from '@material-ui/core';

import './Comment.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 275,
        // height: 375,

        backgroundColor: "azure",
        margin: "10px",

        // padding: "10px",
    },

    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});





const Comment = (props) => {
    const classes = useStyles();

    const { comment } = props;
    const { postId, id, name, body, email } = comment;
    const [user, setUser] = useState({});

    // fetch image
    // useEffect(() => {
    //     fetch('https://randomuser.me/api/?results=5')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             setUser(data);
    //         })
    // }, [])

    // // setTimeout(1000);
    // console.log(user);


    return (
        <div className="comment-div">

            <Card className={classes.root}>

                {/* chobi add korar jonno */}

                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331256__340.png"
                    title="Contemplative Reptile"
                />



                <CardContent>

                    {/* Comment ID */}
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Comment ID : {id}
                    </Typography>

                    {/* Comment Title */}
                    <Typography variant="h5" component="h2">
                        {name}
                    </Typography>

                    {/* Comment Body */}
                    <Typography variant="body2" component="p">
                        {body}
                    </Typography>

                </CardContent>

                {/* <CardActions>

                    <Link to={`/post/${id}`}>
                        <Button variant="contained" color="primary" size="small">Show More</Button>
                    </Link>

                </CardActions> */}

            </Card>


        </div>
    );
};

export default Comment;