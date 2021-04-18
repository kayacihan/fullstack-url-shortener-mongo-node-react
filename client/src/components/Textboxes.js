import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
    textBoxLongUrl: {
        minWidth: "400px"
    },
    shorten: {
        minWidth: "250px"
    }
})


function MyLongTextbox(props) {
    const classes = useStyle();
    return <TextField
        autoFocus
        value={props.url}
        onChange={props.handleChange}
        onKeyPress={props.onKeyPress}
        className={classes.textBoxLongUrl}
        variant="outlined"
        color="primary"
        label="Please paste long URL"
        placeholder="http://www.example.com/longurl"
    />
}


export default MyLongTextbox;
