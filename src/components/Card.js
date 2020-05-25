import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class SimpleCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item xs={12} sm={4}>
      <Card variant='outlined'>
        <CardContent>
          <CardMedia
            style={ {height: '250px'} }
            image={this.props.detail.url} />
          <Typography>
          </Typography>
        </CardContent>
      </Card>
      </Grid>
    );
  }

}

export default SimpleCard;