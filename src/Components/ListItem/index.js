import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import moment from 'moment'
import CloseIcon from '@material-ui/icons/Close'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { MAIN_URL, URL_LIST_REMOVE } from '../../Requests'

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
    btn: {
        backgroundColor: '#bf1a2f',
        color: '#ffffff',
        margin: theme.spacing(2),
    },
    notibox: {
        color: "#ffffff",
        backgroundColor: "#20bf55",
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

const NOTI_VALUES = {
    msg: '',
    err: ''
}

export default function PageListItem({ singleimg, user }) {
    const { _id, date, description, image, mimetype } = singleimg
    const { username, position } = user
    const [noti, setNoti] = React.useState(NOTI_VALUES)
    const [open, setOpen] = React.useState(true)
    const classes = useStyles();
    const history = useHistory()
    const onClose = () => {
        setOpen(false)
    }

    const handleRemove = async (e) => {
        e.preventDefault()
        let url = `${URL_LIST_REMOVE}${_id}`

        try {
            const cb = await axios({
                method: 'delete',
                url: url,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })

            console.log(cb)
            // if (cb.data.err !== '') {
            //     setNoti({ err: cb.data.err })
            // } else {
            //     history.push('/Page-signin')
            // }

        } catch (err) {
            setNoti({ err: err })
        }

    }

    return (
        <div className={classes.root}>
            {
                noti.err ? (
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={onClose}
                        autoHideDuration={2000}
                    >
                        <SnackbarContent
                            className={classes.notibox}
                            aria-describedby="client-snackbar"
                            message={
                                <span id="client-snackbar" className={classes.message}>
                                    sorry
                                </span>
                            }
                            action={[
                                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                                    <CloseIcon className={classes.icon} />
                                </IconButton>,
                            ]}
                        />
                    </Snackbar>
                ) : (
                        ''
                    )
            }
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
                                        <Button variant="contained" className={classes.btn} onClick={handleRemove}>
                                            REMOVE
                                </Button>
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
