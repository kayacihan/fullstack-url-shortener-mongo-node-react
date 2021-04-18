import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
    button: {
        border: 0,
        marginBottom: 15,
        color: "white",
        padding: "15px 30px"
    },
    disabled: {
        color: 'white !important',
        backgroundColor: 'gray !important',
        padding: "15px 30px",
        '&:hover': {
            color: 'white !important',
            backgroundColor: 'gray !important',
        }


    }
}
)

function MySaveButton({ makeShorten, shortening }) {
    const classes = useStyle();
    return <>
        {shortening
            ? <Button
                size="large"
                disabled
                variant="contained"
                endIcon={<SaveIcon />}
                color="primary"
                onClick={makeShorten}
                className={classes.disabled} >
                shortening...
             </Button>
            : <Button
                size="large"
                variant="contained"
                endIcon={<SaveIcon />}
                color="primary"
                onClick={makeShorten}
                className={classes.button} >
                Shorten
            </Button>
        }
    </>
}



function MyCopyButton() {
    const classes = useStyle();
    return <Button
        size="large"
        variant="contained"
        endIcon={<FileCopyIcon />}
        color="primary"
        className={classes.button} >
        Copy
  </Button>
}

export { MyCopyButton, MySaveButton };
