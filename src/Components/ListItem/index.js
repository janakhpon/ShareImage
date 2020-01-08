import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import moment from 'moment'
import { MAIN_URL } from '../../Requests'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        background: 'transparent',
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: '100%',
        background: '#002c4c',
        color: '#ffffff',
    },
    image: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: '100%',
        },
        [theme.breakpoints.up('lg')]: {
            width: 300,
            height: 200,
        },
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function PageListItem({ singleimg, user }) {
    const { _id, date, description, image, mimetype } = singleimg
    const { username, position } = user
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={`${MAIN_URL}/${image}`} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h6">
                                    {moment(date, 'x').fromNow()}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Description : {description}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    IMG : {mimetype}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    ID : {_id}
                                </Typography>
                                <Typography variant="body1">
                                    By : {username}
                                </Typography>
                                <Typography variant="body2">
                                    {position} at Technological University(Mawlamyine)
                                </Typography>
                            </Grid>
                            <Grid item container direction="row">
                                <Grid xs item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                        UPDATE
                                </Typography>
                                </Grid>
                                <Grid xs item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                        REMOVE
                                </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">
                                <a href={`${MAIN_URL}/${image}`}>Access</a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
