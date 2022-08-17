import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    container: {
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        marginTop: 90,
        color: '#333333',
        display: 'flex',
        width: '100%',
        borderBottom: '8px solid #1B3A61'
    },
    line: {
        backgroundColor: '#1B3A61',
        width: 200
    },
    yellowLine: {
        backgroundColor: '#8C6910',
        height: 3,
        width: '25%',
        border: 'none',
        marginRight: 300
    },
    menuItem: {
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    menuList: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    title: {
        color: '#1B3A61',
        fontWeight: 'bold',
        marginBottom: '10px',
        marginTop: '10px'
    },
    details: {
        color: '#333333',
        fontFamily: 'Open Sans',
        fontSize: '15px',
        marginBottom: '5px'
    }
}));
const MenuNav = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.container}>
                <ListItem className={classes.menuList}>
                    <ListItem className={classes.menuItem}>
                        Home
                    </ListItem>
                    <hr className={classes.line} />
                    <ListItem className={classes.menuItem}>
                        News & Events
                    </ListItem>
                    <hr className={classes.line} />
                    <ListItem className={classes.menuItem}>
                        About Us
                    </ListItem>
                    <hr className={classes.line} />
                    <ListItem className={classes.menuItem}>
                        Contact Us
                    </ListItem>
                    <hr className={classes.line} />
                    <ListItem className={classes.menuItem}>
                        Board & Committees
                    </ListItem>
                    <hr className={classes.line} />
                </ListItem>

                <ListItem className={classes.menuList}>
                    <Link className={classes.title}>
                        DATA & RESEARCH
                    </Link>
                    <hr className={classes.yellowLine} />
                    <Link className={classes.details}>
                        Economy
                    </Link>
                    <Link className={classes.details}>
                        State Finances
                    </Link>
                    <Link className={classes.details}>
                        Education
                    </Link>
                    <Link className={classes.details}>
                        Healthcare
                    </Link>
                    <Link className={classes.details}>
                        Local Goverment
                    </Link>
                    <Link className={classes.details}>
                        Population and Demographics
                    </Link>
                    <Link className={classes.details}>
                        State Register Calculations
                    </Link>
                    <Link className={classes.details}>
                        Presentations
                    </Link>
                    <Link className={classes.title}>
                        LEGISLATIVE FISCAL IMPACTS
                    </Link>
                    <hr className={classes.yellowLine} />
                    <Link className={classes.details}>
                        Current General Assembly Session
                    </Link>
                    <Link className={classes.details}>
                        Previous General Assembly Session
                    </Link>
                    <Link className={classes.details}>
                        Forms
                    </Link>
                </ListItem>
                <ListItem className={classes.menuList}>
                    <Link className={classes.title}>
                        GEOGRAPHY & MAPPING
                    </Link>
                    <hr className={classes.yellowLine} />
                    <Link className={classes.details}>
                        Transportation Carrier Network <br />
                        (Uber)
                    </Link>
                    <Link className={classes.details}>
                        SC Real Time Network
                    </Link>
                    <Link className={classes.details}>
                        SC State GIS
                    </Link>
                    <Link className={classes.details}>
                        Maps
                    </Link>
                    <Link className={classes.details}>
                        Interactive Mapping
                    </Link>
                    <Link className={classes.details}>
                        Statewide Aerial Imagery
                    </Link>
                </ListItem>
                <ListItem className={classes.menuList}>
                    <Link className={classes.title}>
                        PROGRAMS & SERVICES
                    </Link>
                    <hr className={classes.yellowLine} />
                    <Link className={classes.details}>
                        Precinct Demographicsand <br />
                        Redistricting
                    </Link>
                    <Link className={classes.details}>
                        State 911 Program
                    </Link>
                    <Link className={classes.details}>
                        Data Services and Online solutions
                    </Link>
                    <Link className={classes.details}>
                        Geodetic Survey
                    </Link>
                    <Link className={classes.details}>
                        Fiscal Analysis
                    </Link>
                    <Link className={classes.details}>
                        2020 Census
                    </Link>
                </ListItem>
            </div>
        </>
    )
}
export default MenuNav;