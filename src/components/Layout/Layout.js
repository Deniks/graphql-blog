import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

const Layout = (props) => {
    const { classes, children } = props;
    let childrenComp = [];
    if (children) {
        for (let i=0; i<children; i++) {
            console.log(children[i])
            childrenComp.push(i)
        }
    }
    return (
        <>
            <CssBaseline />
            <div className={classes.layout}>
                {children[0]}
                    <main>
                        {children[1]}
                        {children[2]}
                        {children[3]}

                        <Grid container spacing={40} className={classes.mainGrid}>
                        {children[4]}
                        {children[5]}
                        </Grid>
                    </main>
            </div>
            {children[6]}
        </>
    )
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
          width: 1100,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
    },
    mainGrid: {
        marginTop: theme.spacing.unit * 3,
    },
})

export default withStyles(styles)(Layout);
