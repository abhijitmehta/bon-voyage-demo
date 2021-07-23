import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import CommentIcon from '@material-ui/icons/Comment';
import ApartmentIcon from '@material-ui/icons/Apartment';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import StorefrontIcon from '@material-ui/icons/Storefront';

const useStyles = makeStyles((theme) => ({
}));

export default function Features(props) {
  const classes = useStyles();

  const content = {
    'col1-header': 'Fusce bibendum',
    'col1-desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id lorem eget purus maximus suscipit nec vitae quam.',
    'col2-header': 'Fusce bibendum',
    'col2-desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id lorem eget purus maximus suscipit nec vitae quam.',
    'col3-header': 'Mauris imperdiet',
    'col3-desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id lorem eget purus maximus suscipit nec vitae quam.',
    'col4-header': 'Donec fermentum',
    'col4-desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id lorem eget purus maximus suscipit nec vitae quam.',
    'col5-header': 'Donec fermentum',
    'col5-desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id lorem eget purus maximus suscipit nec vitae quam.',
    'col6-header': 'Aliquam pellentesque',
    'col6-desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id lorem eget purus maximus suscipit nec vitae quam.',
    ...props.content
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={6}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex">
                <Box pr={5}>
                  <div>
                    <CommentIcon color="primary" fontSize="large" />
                  </div>
                </Box>
                <div>
                  <Typography variant="h6" component="h3" gutterBottom={true}>{content['col1-header']}</Typography>
                  <Typography variant="body2" component="p" color="textSecondary">{content['col1-desc']}</Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex">
                <Box pr={5}>
                  <div>
                    <ApartmentIcon color="primary" fontSize="large" />
                  </div>
                </Box>
                <div>
                  <Typography variant="h6" component="h3" gutterBottom={true}>{content['col2-header']}</Typography>
                  <Typography variant="body2" component="p" color="textSecondary">{content['col2-desc']}</Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex">
                <Box pr={5}>
                  <div>
                    <DevicesOtherIcon color="primary" fontSize="large" />
                  </div>
                </Box>
                <div>
                  <Typography variant="h6" component="h3" gutterBottom={true}>{content['col3-header']}</Typography>
                  <Typography variant="body2" component="p" color="textSecondary">{content['col3-desc']}</Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex">
                <Box pr={5}>
                  <div>
                    <StorefrontIcon color="primary" fontSize="large" />
                  </div>
                </Box>
                <div>
                  <Typography variant="h6" component="h3" gutterBottom={true}>{content['col4-header']}</Typography>
                  <Typography variant="body2" component="p" color="textSecondary">{content['col4-desc']}</Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex">
                <Box pr={5}>
                  <div>
                    <BusinessCenterIcon color="primary" fontSize="large" />
                  </div>
                </Box>
                <div>
                  <Typography variant="h6" component="h3" gutterBottom={true}>{content['col5-header']}</Typography>
                  <Typography variant="body2" component="p" color="textSecondary">{content['col5-desc']}</Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex">
                <Box pr={5}>
                  <div>
                    <FolderSharedIcon color="primary" fontSize="large" />
                  </div>
                </Box>
                <div>
                  <Typography variant="h6" component="h3" gutterBottom={true}>{content['col6-header']}</Typography>
                  <Typography variant="body2" component="p" color="textSecondary">{content['col6-desc']}</Typography>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}