import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function MySnackbar({ openSnackbar, setOpenSnackbar }) {
    return (
        <Snackbar
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            key={`top,center`}
            open={openSnackbar}
            onClose={() => setOpenSnackbar(false)}
        >
            <Alert severity="success">
                Success!
        </Alert>
        </Snackbar>
    )

}



export default MySnackbar;
