import React from "react";
import { useRef } from "react";
// Icons start
import EmailIcon from "@mui/icons-material/Email";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import EventIcon from "@mui/icons-material/Event";
// Icons end
import Alert from '@mui/material/Alert';
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Calendar from "../Calendar_cmp/Calendar";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import AppBar from "../Nav_Bar_cmp/AppBar";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

const LeaveForm = () => {


  const saveDate = (dateData) => {
    //setDate(dateData)
    setUserData({ ...userData, todate: dateData });
  };
  const saveDate2 = (dateData) => {
    //setDate(dateData)
    setUserData({ ...userData, fromdate: dateData });
  };



  const [userData, setUserData] = useState({
    email: "",
    name: "",
    todate: "",
    fromdate:"",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUserData({ ...userData, [name]: value });
  };

  // const [newRecord, setRecords] = useState([]);

  const emailRef = useRef(null);
  const nameRef = useRef(null);

  const alert =()=>{
    <Alert variant="filled" severity="success">Your Present add successfully</Alert>
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newRecords = { ...userData, id: new Date().getTime().toString() };
    // console.log(newRecords);

    // setRecords([...newRecord, newRecords]);
    // console.log(newRecords);
    emailRef.current.value='';
    nameRef.current.value='';


    axios
      // 
      .post("http://localhost:3000/leave", JSON.parse(JSON.stringify(userData)))
      .then((response) => {
        console.log(response);
      });

      // ""
  };

  return (
    <>
      <AppBar></AppBar>

      <br></br>
      <Container className="Form">
        <form action="" onSubmit={handleSubmit}>
          <div className="email_feild">
            <Zoom>
              <h4>
                <EmailIcon />
                Email
              </h4>
              <TextField
                required
                className="email"
                ref={emailRef}
                id="outlined-required"
                label="Email"
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInput}
              />
            </Zoom>
          </div>

          <div className="Dropdown">
            <Zoom>
              <h4>
                <DriveFileRenameOutlineIcon />
                Name
              </h4>
              <FormControl required sx={{ m: 0, minWidth: 120 }}>
                <InputLabel
                  required
                  className="name"
                  id="demo-simple-select-required-label"
                >
                  Name
                </InputLabel>
                <Select
                  required
                ref={nameRef}
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  label="Name *"
                  name="name"
                  className="name_feild"
                  value={userData.name}
                  onChange={handleInput}
                >
                  <MenuItem value={"Gaurav"}>Gaurav sir</MenuItem>
                  <MenuItem value={"Vinay"}>Vinay sir </MenuItem>
                  <MenuItem value={"Gurpreet"}>Gurpreet sir </MenuItem>
                  <MenuItem value={"Jasmine"}>Jasmine man</MenuItem>
                  <MenuItem value={"Rishi"}>Rishi</MenuItem>
                </Select>
              </FormControl>
            </Zoom>
          </div>

          <div className="calendar">
            <Zoom>
              <h4>
                <EventIcon />
                To Date
              </h4>
              <Calendar onSaveDateData={saveDate} />
            </Zoom>
          </div>
          
        <div className="calendar2">
            <Zoom>
              <h4>
                <EventIcon />
                From Date
              </h4>
              <Calendar onSaveDateData={saveDate2} />
            </Zoom>
          </div>

          <div className="submit">
            <Slide bottom>
              <Button variant="contained" type="submit" onClick={alert}>
                Submit
              </Button>
            </Slide>
          </div>
        </form>
      </Container>
    </>
  );
};

export default LeaveForm;