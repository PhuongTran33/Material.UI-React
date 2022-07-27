import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/icons/Menu';
import Search from '@material-ui/icons/Search';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: '#FFFFFF',
    },
    toolbar: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    container: {
        justifyContent: 'flex-end'
    },
    button: {
        backgroundColor: '#3068AD',
        width: 65,
        height: 90,
        borderRadius: '0px',
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#225089',
        }
    },
    label: {
        flexDirection: 'column',
        fontSize: 'xx-small',
        fontWeight: 5,
        letterSpacing: 1
    },
    logo: {
        width: 70,
        height: 70,
        paddingLeft: 25,
    },
    menuButton: {
        fontSize: 43,
    },
    header1: {
        color: '#1B3A61',
        fontSize: 'medium',
        fontWeight: 'bold',
        paddingLeft: 15,
        minWidth: 'fit-content',
        fontFamily: 'Roboto Slab'
    },
    header2: {
        color: '#1B3A61',
        fontSize: 'small',
        fontStyle: 'italic',
        fontFamily: 'Roboto Condensed'
    },
    title: {
        flexGrow: 1,
        color: '#1B3A61',
        fontSize: 'small',
        fontFamily: 'Open Sans'
    },
    search: {
        fill: '#0074C1',
        border: '1px solid #0074C1',
        borderRadius: '2px',
        padding: '5px',
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position='fixed' className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <IconButton classes={{ root: classes.button, label: classes.label }} >
                    <Menu className={classes.menuButton} />
                    MENU
                </IconButton>
                <img alt='logo' src={require('../Assets/Logo.png')} className={classes.logo} />
                <Typography variant='h6' className={classes.header1}>
                    SOUTH CAROLINA <br />
                    REVENUE AND FISCAL AFFAIRS OFFICE
                    <Typography variant='h6' className={classes.header2}>
                        Tranforming data into solutions for South Carolina
                    </Typography>
                </Typography>
                <ListItem className={classes.container}>
                    <MenuItem>
                        <Typography variant='h6' className={classes.title}>
                            ABOUT US
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography variant='h6' className={classes.title}>
                            EVENTS
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography variant='h6' className={classes.title}>
                            BOARDS & COMMITTEES
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <Search className={classes.search} />
                    </MenuItem>
                </ListItem>
            </Toolbar>
        </AppBar>
    );
}

export default Header;