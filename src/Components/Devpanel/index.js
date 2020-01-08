import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        padding: theme.spacing(3, 2),
        height: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        color: '#fff',
        marginTop: '15%',

    },
    btn: {
        backgroundColor: '#bf1a2f',
        color: '#ffffff',
        margin: theme.spacing(2),
    }
}));


export default function PageDev() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h4" component="h5" gutterBottom align="center">
                <Button variant="contained" className={classes.btn}>
                    RESET USERS
                </Button>
                <Button variant="contained" className={classes.btn}>
                    RESET FILES
                </Button>
            </Typography>
            <Typography variant="subtitle2" gutterBottom align="center">
                You can not recover any of these users data or files  after reset!. Think twice befor click the buttons above .
            </Typography>

        </div>
    );
}
