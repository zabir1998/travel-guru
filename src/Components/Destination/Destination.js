import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Destination.css';
import { Link } from 'react-router-dom';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


const Destination = (props) => {
  const {image,name,description}=props.destination;
  const classes = useStyles();
    
    return (
      
        <div className="dest">
              
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="/booking">
        <Button  size="small" color="primary">
          BOOK Now
        </Button>
        </Link>
        
      </CardActions>
    </Card>

        </div>
        
    );
};

export default Destination;