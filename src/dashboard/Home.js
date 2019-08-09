import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './Chart';
import Deposits from './Deposits';
import HomePage from './HomePage';
import useStyles from './DashStyle';
import clsx from 'clsx';

export default function Home() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
            {/* <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
                <Chart />
            </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
                <Deposits />
            </Paper>
            </Grid>  */}
            <Grid item xs={12}>
            <Paper className={classes.paper}>
                <HomePage />
            </Paper>
            </Grid>
        </Grid> 
        </Container>
    )
}