import React, { useState } from "react";
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/icons/Menu';
import Search from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import SearchBar from './SearchBar';
import MenuNav from "./MenuNav";

const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: '#FFFFFF',
        height: '90px'
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
        },
        '&:focus': {
            backgroundColor: '#1B3A61',
        }
    },
    label: {
        flexDirection: 'column',
        fontSize: 'xx-small',
        fontWeight: 5,
        letterSpacing: 1,
    },
    logo: {
        width: 70,
        height: 70,
        paddingLeft: 15,
        cursor: 'pointer',
        ':hover': {
            opacity: 0.5,
        },
        ':focus': {
            opacity: 1,
        },
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
        fill: '#3068AD',
        border: '1px solid #3068AD',
        borderRadius: '2px',
        padding: '5px',
        '&:hover': {
            backgroundColor: '#3068AD',
            fill: '#FFFFFF',
        },
        '&:focus': {
            backgroundColor: '#1B3A61',
            fill: '#FFFFFF',
        }
    },
    searchClick: {
        fill: '#FFFFFF',
        backgroundColor: '#3068AD',
        borderRadius: '2px',
        padding: '5px',
    }
}));

const Header = () => {
    const classes = useStyles();
    const [isSearch, setSearch] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = () => {
        setSearch(!isSearch);
    };
    const handleMenu = () => {
        setOpen(!isOpen);
    };
    return (<>

        <AppBar position='fixed' className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <IconButton onClick={handleMenu} classes={{ root: classes.button, label: classes.label }} >
                    {isOpen ? <CloseIcon className={classes.menuButton} /> : <Menu className={classes.menuButton} />}
                    {isOpen ? 'CLOSE' : 'MENU'}
                </IconButton>
                <img src={require('../Assets/Logo.png')} className={classes.logo} />
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
                        <Search onClick={handleSearch} className={isSearch ? classes.searchClick : classes.search} />
                    </MenuItem>
                </ListItem>
            </Toolbar>
            {isSearch &&
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
            {isOpen &&
                <MenuNav />}
        </AppBar>
    </>
    );
}

export default Header;