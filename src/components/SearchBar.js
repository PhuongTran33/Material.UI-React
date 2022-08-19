import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles(theme => ({
    searchButton: {
        color: '#FFFFFF',
        backgroundColor: '#3068AD',
        borderRadius: '0px',
        minWidth: 'fit-content',
        fontSize: 'small',
        fontWeight: 2,
        paddingLeft: 15,
        paddingRight: 15,
        border: '1px solid #FFFFFF',
        '&:hover': {
            backgroundColor: '#225089',
        },
        '&:focus': {
            backgroundColor: '#1B3A61',
        }
    },
    textField: {
        width: 275,
        marginRight: 10,
        backgroundColor: '#FFFFFF',
        "& input::placeholder": {
            fontSize: "13px"
        }
    },
    container: {
        position: 'absolute',
        alignSelf: 'flex-end',
        padding: 15,
        backgroundColor: '#3068AD',
        marginRight: 32,
        marginTop: 60
    }
}));
const SearchBar = ({ setSearchQuery }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <form>
                <TextField
                    id='search-bar'
                    className={classes.textField}
                    onInput={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                    variant='outlined'
                    placeholder='Enter search term'
                    size='small'
                />
                <IconButton type='submit' aria-label='search' classes={{ root: classes.searchButton, label: classes.searchLabel }} >
                    SEARCH
                </IconButton>
            </form>
        </div>
    )
}
export default SearchBar;