import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
    </div>
  );
}

export default Home;