import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Tooltip from '@material-ui/core/Tooltip';
import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useState } from "react";
import Button from '@material-ui/core/Button'


const useStyle = makeStyles({
    shortUrl: {
        margin: 'auto',
        marginTop: '5px',
        marginBottom: '10px',
        padding: 7,
        backgroundColor: 'white',
        borderRadius: 4,
        borderColor: "green",
        color: '#605c5c',
    },
})

function MyShortUrlTypography({ shortUrl }) {
    const classes = useStyle();

    const [isCopied, setIsCopied] = useState(false);

    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 999);
    };

    return <>
        {
            shortUrl ?
                <>
                    <Typography className={classes.shortUrl
                    } variant="h5" >
                        &nbsp;&nbsp;Shortened:
                    <Tooltip style={{ marginLeft: "10px" }} title="Click to open new tab">
                            <Link
                                href={shortUrl}
                                target="_blank"
                                rel="noreferrer">
                                {shortUrl}
                                <OpenInNewIcon style={{ verticalAlign: 'middle' }} />
                            </Link>
                        </Tooltip>
                        <CopyToClipboard text={shortUrl} onCopy={onCopyText}>
                            <Tooltip title="Click to copy">
                                <Button startIcon={<FileCopyIcon />}> {isCopied ? "Copied!" : ""}</Button>
                            </Tooltip>
                        </CopyToClipboard>
                    </Typography >

                </>
                :
                <Typography className={classes.shortUrl} style={{ backgroundColor: 'transparent' }} variant="h5">
                    &nbsp;
            </Typography>
        }
    </>
}


export default MyShortUrlTypography;
