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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    multilineColor: {
        color: 'red'
    },
    fabbtn: {
        margin: theme.spacing(4),
        padding: theme.spacing(4),
    },
    Dialog: {
        background: '#002c4c',
        color: '#ffffff',
    },
    Dialogcontent: {
        maxWidth: '100%',
        background: '#002c4c',
        color: '#ffffff',
    },
    formLabel: {
        background: '#002c4c',
        color: '#02c39a',
        '&.Mui-focused': {
            color: '#02c39a'
        }
    }
}));


const styles = {
    underline: {
        // normal style
        "&::before": {
            borderBottom: "4px solid green"
        },
        // hover style
        "&:hover:not(.Mui-disabled):before": {
            borderBottom: "4px solid blue"
        },
        // focus style
        "&::after": {
            borderBottom: "4px solid red"
        },

        background: '#002c4c',
        color: '#ffffff',
    }
};

const CustomTextField = withStyles(styles)(props => {
    const { classes, ...other } = props;
    return <TextField InputProps={{ className: classes.underline }} {...other} />;
});

const INITIAL_STATE = {
    description: '',
    image: null
}

export default function PageList() {
    const classes = useStyles()
    const [values, setValues] = React.useState(INITIAL_STATE)
    const [open, setOpen] = React.useState(false)
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const formData = new FormData()

    const handleClickOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

    const handleImageChange = (e) => {
        setValues({ image: e.target.files })
        formData.append('image', e.target.files[0])
    }

    const handleDescriptionChange = (e) => {
        setValues({ description: e.target.value })
        formData.append('description', e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <>
            <Grid container alignContent="center" justify="center">
                <Grid item xs={12} sm={12} md={10} lg={10} xl={8}>
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start">
                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                            <Fab size="small" color="primary" aria-label="add" className={classes.fabbtn} onClick={handleClickOpen}>
                                <AddIcon />
                            </Fab>
                        </Grid>
                        <Grid item xs={8} sm={8} md={9} lg={8} xl={8}>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs={12}>
                            <Dialog
                                fullScreen={fullScreen}
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="responsive-dialog-title"

                                PaperProps={{
                                    classes: {
                                        root: classes.Dialog
                                    }
                                }}

                            >
                                <DialogTitle id="responsive-dialog-title">{" Don't Forget to choose your privacy options!"}</DialogTitle>
                                <DialogContent >

                                    <CustomTextField
                                        onChange={handleDescriptionChange}
                                        value={values.description}
                                        autoFocus
                                        margin="dense"
                                        id="description"
                                        name="Description"
                                        label="Descibe your file"
                                        type="text"
                                        fullWidth
                                        InputLabelProps={{
                                            className: classes.formLabel
                                        }}
                                    />

                                    <CustomTextField
                                        ref={values.image}
                                        onChange={handleImageChange}
                                        autoFocus
                                        margin="dense"
                                        id="description"
                                        name="Description"
                                        label="Descibe your file"
                                        type="file"
                                        accept="image/*"
                                        fullWidth
                                        InputLabelProps={{
                                            className: classes.formLabel
                                        }}
                                    />


                                </DialogContent>
                                <DialogActions>
                                    <Button autoFocus color="primary">
                                        SAVE
                                     </Button>
                                    <Button onClick={handleClose} color="primary" autoFocus>
                                        CANCEL
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Grid>
                    </Grid>
                    <PageListItem />
                </Grid>
            </Grid>



        </>
    );
}
