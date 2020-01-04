import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import PageListItem from '../ListItem'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function PageList() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <Grid container alignContent="center" justify="center">
                <Grid item xs={12} sm={12} md={10} lg={10} xl={8}>
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start">
                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                            <Fab color="primary" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </Grid>
                        <Grid item xs={8} sm={8} md={9} lg={8} xl={8}>

                        </Grid>
                    </Grid>
                    <PageListItem />
                </Grid>
            </Grid>



        </>
    );
}
