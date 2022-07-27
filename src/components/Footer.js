import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: "#1B3A61",
        display: "grid"
    },
    title: {
        flexGrow: 1,
        marginLeft: 10,
        fontSize: "small",
    },
    details: {
        fontSize: "small",
        marginBottom: 15
    },
    logo: {
        paddingTop: 15,
        width: 70,
        height: 70,
    },
    container: {
        flexDirection: "column",
        alignItems: "flex-start",
        alignItems:"baseline",
        paddingTop: 35
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <AppBar position='fixed' className={classes.appBar} >
            <MenuItem className={classes.MenuItem}>
                <ListItem className={classes.container} >
                    <Typography variant='h6' className={classes.title}>
                        South Carolina <br />
                        Revenue and Fiscal Affairs Office
                    </Typography>
                    <IconButton>
                        <img alt="logo" src={require('../Assets/Group 262.png')} className={classes.logo} />
                    </IconButton>
                </ListItem>
                <ListItem className={classes.container} >
                    <Typography variant='h6' className={classes.title}>
                        Privacy Statement <br />
                        FOIA <br />
                        Disclosures and Reporting <br />
                        Report Fraud <br />
                        Accessibility <br />
                        Contact Us
                    </Typography>
                </ListItem>
                <ListItem className={classes.container} >
                    <Typography variant='h6' className={classes.title}>
                        MAIN OFFICE
                        <Typography variant='h6' className={classes.details}>
                            1000 Assembly St, Rembert Dennis Building, Suite 421 <br />
                            Columbia, SC 29201
                        </Typography>
                        GEODETIC SURVEY SECTION <br />
                        <Typography variant='h6' className={classes.details}>
                            5 Geology Rd <br />
                            Columbia, SC 29212
                        </Typography>
                        HEALTH AND DEMOGRAPHICS DIVISION
                        <Typography variant='h6' className={classes.details}>
                            1000 Assembly St, Rembert Dennis Building, Suite 421 <br />
                            Columbia, SC 29201
                        </Typography>
                    </Typography>
                </ListItem>
            </MenuItem >
        </AppBar >
    );
}

export default Footer;