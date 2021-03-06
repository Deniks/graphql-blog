import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const archives = [
    'March 2020',
    'February 2020',
    'January 2020',
    'December 2019',
    'November 2019',
    'October 2019',
    'September 2019',
    'August 2019',
    'July 2019',
    'June 2019',
    'May 2019',
    'April 2019',
  ];
  
const social = ['GitHub', 'Twitter', 'Facebook'];

  
const Sidebar = (props) => {
    const {classes} = props;
    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                About
                </Typography>
                <Typography>
                Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                </Typography>
            </Paper>
            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Archives
            </Typography>
            {archives.map(archive => (
                <Typography key={archive}>{archive}</Typography>
            ))}
            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Social
            </Typography>
            {social.map(network => (
                <Typography key={network}>{network}</Typography>
            ))}
        </Grid>
    );
}

Sidebar.displayName = 'Sidebar';

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = theme => ({
    sidebarAboutBox: {
        padding: theme.spacing.unit * 2,
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing.unit * 3,
    },
});

export default withStyles(styles)(Sidebar);