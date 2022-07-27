import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: '#1B3A61',
        display: 'grid',
    },
    menuItem: {
        alignItems: 'flex-start',
    },
    link: {
        flexGrow: 1,
        marginLeft: 10,
        color: '#FFFFFF',
        fontSize: 'small',
        fontWeight: 20,
        margin: 5
    },
    title: {
        flexGrow: 1,
        marginLeft: 10,
        fontSize: 'small',
        color: '#C3C3C3',
        letterSpacing: 1,
        fontWeight: 'medium',
    },
    details: {
        fontSize: 'small',
        marginBottom: 15,
        color: '#FFFFFF',
        fontWeight: 10,
    },
    name: {
        fontSize: 'small',
        marginBottom: 15,
        color: '#FFFFFF'
    },
    logo: {
        paddingTop: 15,
        width: 100,
        height: 100,
    },
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: 20
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <AppBar position='fixed' className={classes.appBar} >
            <ListItem className={classes.menuItem}>
                <ListItem className={classes.container} >
                    <Typography variant='h6' className={classes.name}>
                        South Carolina <br />
                        Revenue and Fiscal Affairs Office
                    </Typography>
                    <img alt='logo' src={require('../Assets/Group 262.png')} className={classes.logo} />
                </ListItem>
                <ListItem className={classes.container} >
                    <Link variant='h6' className={classes.link}>
                        Privacy Statement
                    </Link>
                    <Link variant='h6' className={classes.link}>
                        FOIA
                    </Link>
                    <Link variant='h6' className={classes.link}>
                        Disclosures and Reporting
                    </Link>
                    <Link variant='h6' className={classes.link}>
                        Report Fraud
                    </Link>
                    <Link variant='h6' className={classes.link}>
                        Accessibility
                    </Link>
                    <Link variant='h6' className={classes.link}>
                        Contact Us
                    </Link>
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
            </ListItem >
        </AppBar >
    );
}

export default Footer;