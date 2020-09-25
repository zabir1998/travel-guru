import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import StarRateIcon from "@material-ui/icons/StarRate";

import hotel1 from '../../resources/image/rectangle26.png';
import hotel2 from '../../resources/image/rectangle27.png';
import hotel3 from '../../resources/image/rectangle28.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: 20,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
  }));
  

const Hotel = () => {
    const classes = useStyles();
    return (
        <>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="hotel1" src={hotel1} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Light bright airy stylish apt & safe peaceful stay
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    4 Guests, 2 Bedrooms, 2 Beds, 2 Baths
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    WIFI, Air Conditioning, Kitchen <br />
                    Cancellation Flexibility available
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    style={{ cursor: "pointer" }}
                  ></Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <StarRateIcon></StarRateIcon> 4.9 (20)
                  </Typography>
                </Grid>
              </Grid>

              <Grid item>
                <Typography variant="subtitle1">$34/night</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>

      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="hotel2" src={hotel2} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Apartment in Lost Panarama
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    4 Guests, 2 Bedrooms, 2 Beds, 2 Baths
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    WIFI, Air Conditioning, Kitchen <br />
                    Cancellation Flexibility available
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <StarRateIcon></StarRateIcon> 4.8 (10)
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">$19/night</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>

      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="hotel3" src={hotel3} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    AR Lounge & Pool (r&r + b&b)
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    4 Guests, 2 Bedrooms, 2 Beds, 2 Baths
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    WIFI, Air Conditioning, Kitchen <br />
                    Cancellation Flexibility available
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <StarRateIcon></StarRateIcon> 4.8 (10)
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">$44/night</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
    );
};

export default Hotel;