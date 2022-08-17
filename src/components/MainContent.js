import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import Search from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import PortraitOutlinedIcon from '@material-ui/icons/PortraitOutlined';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import background from '../Assets/shutterstock_42474535.jpg'
import { ReactComponent as DataSvg } from '../Assets/Data-Research-Icon.svg'
import { ReactComponent as GeographySvg } from '../Assets/Geography-Icon.svg'
import { ReactComponent as LegislativeSvg } from '../Assets/Legislative-Icon.svg'
import { ReactComponent as ProgramsSvg } from '../Assets/Programs-Icon.svg'
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    toolbar: {
        height: 70,
    },
    content: {
        flexGrow: 1,
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: theme.spacing(15),
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 'large',
    },
    intro: {
        fontFamily: 'Roboto Slab',
        fontSize: 25,
        fontWeight: 375
    },
    chart: {
        flexGrow: 1,
    },
    title: {
        fontWeight: 'bold',
        color: '#1B3A61',
    },
    line: {
        backgroundColor: '#1B3A61',
        height: 10,
        width: '500%',
        border: 'none',
    },
    underline: {
        backgroundColor: '#8C6910',
        height: 3,
        border: 'none',
        marginRight: 130
    },
    link: {
        fontFamily: 'Open Sans',
        fontWeight: 'Bold',
        fontSize: 18,
        marginTop: 25,
        color: '#35B0CB',
        textDecoration: 'underline',

    },
    container: {
        width: '100%',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#E1E5EA',
    },
    menuItem: {
        alignItems: 'flex-start',
    },
    listItem: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        minWidth: 550
    },
    icon: {
        width: 170,
        height: 170,
        borderRadius: '0px',
        backgroundColor: '#FFFFFF',
    },
    smallIcon: {
        fill: '#8C6910',
    },
    label: {
        flexDirection: 'column',
        fontSize: 'small',
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#1B3A61',
        margin: 10,
    },
    date: {
        flexDirection: 'column',
    },
    fullWidth: {
        width: '100%',
    },
    searchBar: {
        display: 'flex',
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 20,
    },
    searchButton: {
        color: '#FFFFFF',
        backgroundColor: '#3068AD',
        borderRadius: '0px',
        height: 40,
        minWidth: 'fit-content',
        width: 100,
        margin: '0 0 0 7px ',
    },
    searchLabel: {
        fontSize: 'x-small',
        letterSpacing: 1
    },
    textField: {
        backgroundColor: '#FFFFFF',
        width: 450
    },
    menuButton: {
        width: 75,
        height: 100,
    },
    calendar: {
        backgroundColor: '#8C6910',
        width: 65,
        height: 90,
        borderRadius: '0px',
        color: '#FFFFFF',
    },
    button: {
        color: '#FFFFFF',
        backgroundColor: '#0074C1',
        minWidth: 'fit-content',
        fontSize: 'small',
        fontWeight: 2,
        paddingLeft: 15,
        paddingRight: 15
    },
    status: {
        backgroundColor: '#666666',
        color: '#FFFFFF',
        borderRadius: '5px',
        marginLeft: 10,
        height: 20
    },
    small: {
        fontSize: 'small'
    },
    arrowUp: {
        backgroundColor: '#E1E5EA',
        margin: 10,
        color: '#0074C1',
    },
    top: {
        float: 'right'
    },
    footer: {
        height: 350
    },
}));

const SearchBar = ({ setSearchQuery }) => {
    const classes = useStyles();
    return (
        <form>
            <TextField
                id='search-bar'
                className={classes.textField}
                onInput={(e) => {
                    setSearchQuery(e.target.value);
                }}
                variant='outlined'
                placeholder='Search rfa.sc.gov'
                size='small'
            />
            <IconButton type='submit' aria-label='search' classes={{ root: classes.searchButton, label: classes.searchLabel }} >
                SEARCH
                <Search />
            </IconButton>
        </form>
    )
}

const scrollUp = () => {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    if (top > 0) {
        window.scrollTo(0, top - 15);
        setTimeout(scrollUp, 10);
    }
};

const MainContent = () => {
    const classes = useStyles();
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <main className={classes.fullWidth}>
            <div className={classes.toolbar} />
            <div className={classes.content}>
                <Typography variant='h6' className={classes.intro}>
                    Providing independent research, analysis, and <br />
                    resources to faciliate informed policy decisions <br />
                    and adminisstration of services
                </Typography>
                <div className={classes.searchBar}>
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                </div>
            </div>
            <div className={classes.chart}>
                <ListItem className={classes.container}>
                    <IconButton classes={{ root: classes.icon, label: classes.label }} >
                        <DataSvg className={classes.menuButton} />
                        DATA & RESEARCH
                    </IconButton>
                    <IconButton classes={{ root: classes.icon, label: classes.label }} >
                        <GeographySvg className={classes.menuButton} />
                        GEOGRAPHY & MAPPING
                    </IconButton>
                    <IconButton classes={{ root: classes.icon, label: classes.label }} >
                        <LegislativeSvg className={classes.menuButton} />
                        PROGRAM & SERVICES
                    </IconButton>
                    <IconButton classes={{ root: classes.icon, label: classes.label }} >
                        <ProgramsSvg className={classes.menuButton} />
                        LEGISLATIVE FISCAL IMPACTS
                    </IconButton>
                </ListItem>
            </div>
            <div >
                <ListItem className={classes.menuItem}>
                    <ListItem className={classes.listItem} >
                        <Typography variant='h5' className={classes.title}>
                            POPULAR SERVICES AND LINKS
                            <hr className={classes.line} />
                        </Typography>
                    </ListItem>
                </ListItem>
            </div>
            <div >
                <ListItem className={classes.menuItem}>
                    <ListItem className={classes.listItem} >
                        <Link className={classes.link} >
                            Overview and History of the South Carolina State Budget
                        </Link>
                        <Link className={classes.link} >
                            Employer Contribution Trends
                        </Link>
                        <Link className={classes.link} >
                            Appropriation Bills and Acts
                        </Link>
                    </ListItem>
                    <ListItem className={classes.listItem} >
                        <Link className={classes.link} >
                            Overview and History of the South Carolina State Budget
                        </Link>
                        <Link className={classes.link} >
                            Employer Contribution Trends -June 4, 2019
                        </Link>
                        <Link className={classes.link} >
                            Executive Budget Office State Agency Budget Plans(Requests)
                        </Link>
                    </ListItem>
                    <ListItem className={classes.listItem} >
                        <Link className={classes.link} >
                            Overview and History of the South Carolina State Budget
                        </Link>
                        <Link className={classes.link} >
                            Employer Contribution Trends -June 4, 2019
                        </Link>
                        <Link className={classes.link} >
                            Executive Budget Office State Agency Budget Plans(Requests)
                        </Link>
                    </ListItem>
                </ListItem >
            </div>
            <div >
                <ListItem className={classes.menuItem}>
                    <ListItem className={classes.listItem} >
                        <Typography variant='h5' className={classes.title}>
                            Recent Updates
                            <hr className={classes.underline} />
                        </Typography>
                    </ListItem>
                    <ListItem className={classes.listItem} >
                        <Typography variant='h5' className={classes.title}>
                            Calendar of Events
                            <hr className={classes.underline} />
                        </Typography>
                    </ListItem>
                </ListItem >
            </div>
            <div >
                <ListItem className={classes.menuItem}>
                    <ListItem className={classes.listItem} >
                        <Link className={classes.link} >
                            Local Goverment Finance
                        </Link>
                        <Typography>
                            Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisses nec
                            tortor urna. Ut laoreet sodales
                        </Typography>
                        <ListItem className={classes.menuItem} style={{ paddingLeft: 0 }}>
                            <Typography >
                                Published: Jan 2, 2020
                            </Typography>
                            <IconButton classes={{ root: classes.status, label: classes.small }} >
                                Updated
                            </IconButton >
                        </ListItem>
                        <Link className={classes.link} >
                            Transportation Network Carrier Maps
                        </Link>
                        <ListItem className={classes.menuItem} style={{ paddingLeft: 0 }}>
                            <Typography>
                                Published: Jan 2, 2020
                            </Typography>
                            <IconButton classes={{ root: classes.status, label: classes.small }} >
                                New
                            </IconButton >
                        </ListItem>
                        <Link className={classes.link} >
                            BEA Long-Range General Fund Revenue Plan for FY 2019-20 to FY 2022-23
                        </Link>
                        <Typography>
                            Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisses nec
                            tortor urna. Ut laoreet sodales
                        </Typography>
                        <ListItem className={classes.menuItem} style={{ paddingLeft: 0 }}>
                            <Typography>
                                Published: Dec 16, 2019
                            </Typography>
                            <IconButton classes={{ root: classes.status, label: classes.small }} >
                                Updated
                            </IconButton >
                        </ListItem>
                        <Link className={classes.link} >
                            Budget Development
                        </Link>
                        <ListItem className={classes.menuItem} style={{ paddingLeft: 0 }}>
                            <Typography>
                                Published: Dec 16, 2019
                            </Typography>
                            <IconButton classes={{ root: classes.status, label: classes.small }} >
                                New
                            </IconButton >
                        </ListItem>
                        <Link className={classes.link} >
                            November 2019 General Fund Revenue Digest
                        </Link>
                        <ListItem className={classes.menuItem} style={{ paddingLeft: 0 }}>
                            <Typography>
                                Published: Dec 13, 2019
                            </Typography>
                            <IconButton classes={{ root: classes.status, label: classes.small }} >
                                New
                            </IconButton >
                        </ListItem>
                        <Button className={classes.button} >
                            VIEW MORE
                        </Button>
                    </ListItem>
                    <ListItem className={classes.listItem} >
                        <MenuItem className={classes.menuItem}>
                            <IconButton classes={{ root: classes.calendar, label: classes.date }}>
                                <Typography variant='h6'>
                                    NOV
                                </Typography>
                                <Typography variant='h4' style={{ fontWeight: 'bold' }}>
                                    22
                                </Typography>
                            </IconButton>
                            <ListItem className={classes.listItem} >
                                <IconButton classes={{ root: classes.status, label: classes.small }} style={{ backgroundColor: '#D2B859', color: '#000000' }}>
                                    Updated
                                </IconButton >
                                <Typography style={{ fontWeight: 'bold', paddingLeft: 20 }} >
                                    Board of Economic Advisor Meeting
                                </Typography>
                                <ListItem className={classes.menuItem} >
                                    <LocationOnIcon className={classes.smallIcon} />
                                    <Typography>
                                        Room 417, Bowers Conference Room, Rembert <br />
                                        Dennis Building
                                    </Typography>
                                </ListItem>
                                <ListItem className={classes.menuItem} >
                                    <AccessTimeOutlinedIcon className={classes.smallIcon} />
                                    <Typography>
                                        1:30 pm
                                    </Typography>
                                </ListItem>
                                <ListItem className={classes.menuItem} >
                                    <PortraitOutlinedIcon className={classes.smallIcon} />
                                    <Typography>
                                        (803)734-2265
                                    </Typography>
                                </ListItem>
                            </ListItem>
                        </MenuItem >
                        <MenuItem className={classes.menuItem}>
                            <IconButton classes={{ root: classes.calendar, label: classes.date }}>
                                <Typography variant='h6'>
                                    NOV
                                </Typography>
                                <Typography variant='h4' style={{ fontWeight: 'bold' }}>
                                    23
                                </Typography>
                            </IconButton>
                            <ListItem className={classes.listItem} >
                                <IconButton classes={{ root: classes.status, label: classes.small }} style={{ backgroundColor: '#E9261D' }}>
                                    Cancelled
                                </IconButton >
                                <Typography style={{ fontWeight: 'bold', paddingLeft: 20 }} >
                                    Board of Economic Advisor Meeting
                                </Typography>
                                <ListItem className={classes.menuItem} >
                                    <LocationOnIcon className={classes.smallIcon} />
                                    <Typography>
                                        Room 417, Bowers Conference Room, Rembert <br />
                                        Dennis Building
                                    </Typography>
                                </ListItem>
                                <ListItem className={classes.menuItem} >
                                    <AccessTimeOutlinedIcon className={classes.smallIcon} />
                                    <Typography>
                                        1:30 pm
                                    </Typography>
                                </ListItem>
                                <ListItem className={classes.menuItem} >
                                    <PortraitOutlinedIcon className={classes.smallIcon} />
                                    <Typography>
                                        (803)734-2265
                                    </Typography>
                                </ListItem>
                            </ListItem>
                        </MenuItem >
                        <MenuItem className={classes.menuItem}>
                            <IconButton classes={{ root: classes.calendar, label: classes.date }}>
                                <Typography variant='h6'>
                                    NOV
                                </Typography>
                                <Typography variant='h4' style={{ fontWeight: 'bold' }}>
                                    25
                                </Typography>
                            </IconButton>
                            <ListItem className={classes.listItem} >
                                <Typography style={{ fontWeight: 'bold', paddingLeft: 20 }} >
                                    Board of Economic Advisor Meeting
                                </Typography>
                                <ListItem className={classes.menuItem} >
                                    <LocationOnIcon className={classes.smallIcon} />
                                    <Typography>
                                        Room 417, Bowers Conference Room, Rembert <br />
                                        Dennis Building
                                    </Typography>
                                </ListItem>
                                <ListItem className={classes.menuItem} >
                                    <AccessTimeOutlinedIcon className={classes.smallIcon} />
                                    <Typography>
                                        1:30 pm
                                    </Typography>
                                </ListItem>
                                <ListItem className={classes.menuItem} >
                                    <PortraitOutlinedIcon className={classes.smallIcon} />
                                    <Typography>
                                        (803)734-2265
                                    </Typography>
                                </ListItem>
                            </ListItem>
                        </MenuItem >
                        <MenuItem className={classes.menuItem}>
                            <IconButton classes={{ root: classes.calendar, label: classes.date }}>
                                <Typography variant='h6'>
                                    NOV
                                </Typography>
                                <Typography variant='h4' style={{ fontWeight: 'bold' }}>
                                    28
                                </Typography>
                            </IconButton>
                            <ListItem className={classes.listItem} >
                                <Typography style={{ fontWeight: 'bold', paddingLeft: 20 }} >
                                    Board of Economic Advisor Meeting
                                </Typography>
                                <ListItem className={classes.menuItem} >
                                    <LocationOnIcon className={classes.smallIcon} />
                                    <Typography>
                                        Room 417, Bowers Conference Room, Rembert <br />
                                        Dennis Building
                                    </Typography>
                                </ListItem>
                                <ListItem className={classes.menuItem} >
                                    <AccessTimeOutlinedIcon className={classes.smallIcon} />
                                    <Typography>
                                        1:30 pm
                                    </Typography>
                                </ListItem>
                                <ListItem className={classes.menuItem} >
                                    <PortraitOutlinedIcon className={classes.smallIcon} />
                                    <Typography>
                                        (803)734-2265
                                    </Typography>
                                </ListItem>
                            </ListItem>
                        </MenuItem >
                        <Button className={classes.button} >
                            VIEW ALL EVENTS
                        </Button>
                    </ListItem>
                </ListItem >
            </div>
            <div >
                <Typography variant='body1' className={classes.top}>
                    Back to Top
                    <IconButton onClick={scrollUp} className={classes.arrowUp}>
                        <KeyboardArrowUpIcon />
                    </IconButton>
                </Typography>
            </div>
            <div className={classes.footer} />
        </main >
    );
}

export default MainContent;