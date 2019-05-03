import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const sections = [
    'Technology',
    'Design',
    'Culture',
    'Business',
    'Politics',
    'Opinion',
    'Science',
    'Health',
    'Style',
    'Travel',
];

const Header = (props) => {
    const {classes} = props;
    return (
        <>
            <Toolbar className={classes.toolbarMain}>
                <Button size="small">Subscribe</Button>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    Blog
                </Typography>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Button variant="outlined" size="small">
                    Sign up
                </Button>
            </Toolbar>
            <Toolbar variant="dense" className={classes.toolbarSecondary}>
                {sections.map(section => (
                    <Typography color="inherit" noWrap key={section}>
                    {section}
                    </Typography>
                ))}
            </Toolbar>
        </>
    );
}

Header.displayName = 'Header';

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = theme => ({
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
    },
})

export default withStyles(styles)(Header);