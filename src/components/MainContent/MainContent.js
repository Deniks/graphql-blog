import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withPosts } from '../hoc/withPosts';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Markdown from '../Markdown';

const MainContent = (props) => {
    const { classes, title } = props;
    let titles = [];
    titles.push(title);
    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
            From the Firehose
            </Typography>
            <Divider />
            {console.log('title => ', title)}
            {titles.map(post => (
            <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                {post}
            </Markdown>
            ))}
        </Grid>
    );
}

MainContent.displayName = 'MainContent';

MainContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = theme => ({
    markdown: {
        padding: `${theme.spacing.unit * 3}px 0`,
    },
});

export default withPosts(withStyles(styles)(MainContent));