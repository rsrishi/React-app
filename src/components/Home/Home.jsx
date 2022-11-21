import * as React from "react";
import "./Home.css";
// Icons start
import EmailIcon from "@mui/icons-material/Email";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventIcon from "@mui/icons-material/Event";
import TaskIcon from "@mui/icons-material/Task";
// Icons end
import TextField from "@mui/material/TextField";
import AppBar from "../Nav_Bar_cmp/AppBar";
import { Container } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Calendar from "../Calendar_cmp/Calendar";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

function Home() {
  //const [date , setDate] =useState('')

  const saveDate = (dateData) => {
    //setDate(dateData)
    setUserData({ ...userData, date: dateData });
  };

  const [userData, setUserData] = useState({
    email: "",
    name: "",
    hours: "",
    task: "",
    date: '',
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUserData({ ...userData, [name]: value });
  };

  const [newRecord, setRecords] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecords = { ...userData, id: new Date().getTime().toString() };
    console.log(newRecords);

    setRecords([...newRecord, newRecords]);
    // console.log(newRecords);

    axios
      .post("http://localhost:3000/attendance", JSON.parse(JSON.stringify(userData)))
      .then((response) => {
        console.log(response);
      });
      // https://enoz6ni173yeg.x.pipedream.net
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

          <div className="hours">
            <Zoom>
              <h4>
                <AccessTimeIcon />
                Hours
              </h4>
              <FormControl required sx={{ m: 0, minWidth: 120 }}>
                <InputLabel
                  required
                  className="hours"
                  id="demo-simple-select-required-label"
                >
                  Hours
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  label="Hours*"
                  name="hours"
                  className="name_feild"
                  value={userData.hours}
                  onChange={handleInput}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </Zoom>
          </div>

          <div className="calendar">
            <Zoom>
              <h4>
                <EventIcon />
                Date
              </h4>
              <Calendar onSaveDateData={saveDate} />
            </Zoom>
          </div>

          <div className="task">
            <Zoom>
              <h4>
                <TaskIcon />
                Task Preformed
              </h4>
              <TextField
                className="task"
                required
                id="outlined-required"
                label="Task Performed"
                name="task"
                value={userData.task}
                onChange={handleInput}
                // placeholder="Hello World"
              />
            </Zoom>
          </div>

          <div className="submit">
            <Slide bottom>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Slide>
          </div>
        </form>
      </Container>
    </>
  );
}
export default Home;
