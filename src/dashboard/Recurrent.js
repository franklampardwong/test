import React from 'react';

import SpreadSheet from './SpreadSheet';
import Title from './Title';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useStyles from './DashStyle';

export default function Recurrent() {
    const classes = useStyles();
    return (
            
            <Container maxWidth="lg" className={classes.container}>
            <Grid item xs={12}>
            <Title>Budget</Title>
                
                <SpreadSheet />
            </Grid>
            </Container>
        );
    }    

    

