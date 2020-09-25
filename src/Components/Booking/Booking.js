import React from "react";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import "./Booking.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      // margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

const Booking = (props) => {
  const id = props.destinationId;
  // console.log(id);

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2020-09-17T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const classes = useStyles();
  return (
    <div className="formBody">
      <form className={classes.root} noValidate autoComplete="off">
        <p>
          {" "}
          <strong>Origin</strong>{" "}
        </p>
        <TextField id="filled-basic" label="" variant="filled" />
        <br />
        <p style={{ marginTop: "12px" }}>
          {" "}
          <strong>Destination</strong>{" "}
        </p>
        <TextField id="filled-basic" label="" variant="filled" />
      </form>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container spacing={3} style={{ marginTop: "6px" }}>
          <Grid item xs={6}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="From"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="To"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
      <Link to="/hotel">
        <button className="innerBookingButton">Start Booking</button>
      </Link>
    </div>
  );
};

export default Booking;