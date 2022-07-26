import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/icons/Menu";
import Search from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: "#FFFFFF",
    },
    toolbar: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    toolbarMenu: {
        marginLeft: "20%",
        paddingRight: 0,
    },
    button: {
        backgroundColor: "#3068AD",
        width: 65,
        height: 90,
        borderRadius: "0px",
        color: "#FFFFFF",
    },
    label: {
        flexDirection: "column",
        fontSize: 10,
        fontWeight: 2
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
        color: "#1B3A61",
        fontSize: "medium",
        fontWeight: "bold",
        paddingLeft: 15,
    },
    header2: {
        color: "#1B3A61",
        fontSize: "small",
        fontStyle: "italic",

    },
    menuItem: {
        justify: "flex-end"
    },
    title: {
        flexGrow: 1,
        color: "#1B3A61",
        fontSize: "small",

    },
    search: {
        fill: "#0074C1",
        border: "1px solid #0074C1",
        borderRadius: "2px"
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position='fixed' className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <IconButton classes={{ root: classes.button, label: classes.label }}
                    variant="raised"
                    color="primary"
                    disableRipple={true}>
                    <Menu className={classes.menuButton} >Menu</Menu>
                    MENU
                </IconButton>
                <img alt="logo" src={require('../Assets/Logo.png')} className={classes.logo} />
                <Typography variant='h6' className={classes.header1}>
                    SOUTH CAROLINA <br />
                    REVENUE AND FISCAL AFFAIRS OFFICE
                    <Typography variant='h6' className={classes.header2}>
                        Tranforming data into solutions for South Carolina
                    </Typography>
                </Typography>
                <Toolbar className={classes.toolbarMenu}>
                    <MenuItem className={classes.MenuItem}>
                        <Typography variant='h6' className={classes.title}>
                            ABOUT US
                        </Typography>
                    </MenuItem>
                    <MenuItem className={classes.MenuItem}>
                        <Typography variant='h6' className={classes.title}>
                            EVENTS
                        </Typography>
                    </MenuItem>
                    <MenuItem className={classes.MenuItem}>
                        <Typography variant='h6' className={classes.title}>
                            BOARDS & COMMITTEES
                        </Typography>
                    </MenuItem>
                    <MenuItem className={classes.MenuItem}>
                        <Search className={classes.search} />
                    </MenuItem>
                </Toolbar>
            </Toolbar>
        </AppBar>
    );
}

export default Header;