import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './EachPost.css'
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
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



const EachPost = (props) => {

    const classes = useStyles();

    const { post, showMoreHandler } = props;
    const { userId, id, title, body } = post;

    return (
        <div className='main-div'>

            {/* card 1 */}
            <Card className={classes.root}>
                <CardContent>

                    {/* Post ID */}
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Post ID : {id}
                    </Typography>

                    {/* Post Title */}
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>

                    {/* Post Body */}
                    <Typography variant="body2" component="p">
                        {body}
                    </Typography>

                </CardContent>

                <CardActions>
                    <Link to={`/post/${id}`}>
                        <Button onClick={showMoreHandler} variant="contained" color="primary" size="small">Show More</Button>
                    </Link>

                </CardActions>
            </Card>

        </div>
    );
};

export default EachPost;