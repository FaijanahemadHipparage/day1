import React from "react";
import {
  Paper,
  Grid,
  TextField,
  NativeSelect,
  FormControlLabel,
  Checkbox,
  Button,
  InputLabel,
} from "@mui/material";

const Form = () => {
  const btnstyle = { margin: "8px 0" };
  const paperstyle = {
    padding: 20,
    height: "auto",
    width: 800,
    margin: "50px auto",
  };
  return (
    <div margin={5}>
      <Paper elavation={10} padding={10} style={paperstyle}>
        <div align="center">
          <h2>Registration Form</h2>
        </div>
        <hr color="green"></hr>
        <formcontrol>
          <Grid container px={10}>
            <Grid item xs={12} md={12} mt={3}>
              <TextField
                type="text"
                id="standard-basic"
                label="Name"
                variant="standard"
                fullWidth
              />
            </Grid>
            {/* <Grid item xs={2} md={2}></Grid> */}
            <Grid item xs={5} md={5} mt={3}>
              <TextField
                id="standard-basic"
                type="email"
                label="E-mail"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={2} md={2}></Grid>
            <Grid item xs={5} md={5} mt={3}>
              <TextField
                id="standard-basic"
                type="Number"
                label="Mobile Number"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={5} md={5} mt={3}>
              <InputLabel variant="standard">Birth Date</InputLabel>
              <TextField
                id="standard-basic"
                type="Date"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={2} md={2}></Grid>
            <Grid item xs={5} md={5} mt={3}>
              <TextField
                id="standard-basic"
                type="Number"
                label="Age"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={5} md={5} mt={3}>
              <InputLabel variant="standard">Gender</InputLabel>
              <NativeSelect fullWidth>
                <option value={""}>Select Gender</option>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
                <option value={"Other"}>Other</option>
              </NativeSelect>
            </Grid>
            <Grid item xs={2} md={2}></Grid>
            <Grid item xs={5} md={5} mt={3}>
              <TextField
                id="standard-basic"
                type="Text"
                label="Qualification"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12} mt={3}>
              <TextField
                type="text"
                id="standard-basic"
                label="Address"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={10} md={10} mt={3}>
              <label>
                <b> Language Spoken </b> -: &nbsp;
              </label>

              <FormControlLabel
                control={<Checkbox size="small" color="success" />}
                label="Marathi"
              />
              <FormControlLabel
                control={<Checkbox size="small" color="success" />}
                label="Hindi"
              />
              <FormControlLabel
                control={<Checkbox size="small" color="success" />}
                label="English"
              />
              <FormControlLabel
                control={<Checkbox size="small" color="success" />}
                label="Urdu"
              />
            </Grid>
            <Grid item xs={12} md={12} mt={2} mb={1}>
              <FormControlLabel
                control={<Checkbox color="primary" defaultChecked />}
                label="Remember Me"
              />
            </Grid>
            <Button
              type="Submit"
              variant="contained"
              color="primary"
              style={btnstyle}
              fullWidth
              mb={5}
            >
              Submit
            </Button>
          </Grid>
        </formcontrol>
      </Paper>
    </div>
  );
};

export default Form;

//git init
//git add .
//git commit -m "day1 practice"
