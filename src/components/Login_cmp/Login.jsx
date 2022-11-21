import { Container } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import EmailIcon from "@mui/icons-material/Event";
// import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { Zoom } from "react-reveal";
import { Slide } from "react-reveal";
import "../Login_cmp/Login.css";

const login = () => {
  return (
    <Container>
      <div className="image">
        <img
          src="https://cdn1.vectorstock.com/i/thumb-large/75/95/pixel-computer-logo-icon-design-vector-22627595.jpg"
          alt="computer.logo"
        />
      </div>
      <div className="heading">
        <h2>Login in to app</h2>
      </div>
      <form>
        <Zoom>
        <div>
          {/* <h6>
        <EmailIcon/>
          </h6> */}
          <TextField
            required
            id="outline-required"
            label="Email"
            variant="standard"
            className="email"
            name="email"
            type="email"
          />
        </div>
        </Zoom>
        <br></br>
        <Zoom>
        <div>
          {/* <h6>
        <VpnKeyIcon/>
          </h6> */}
          <TextField
            required
            id="outlined-required2"
            label="Password"
            variant="standard"
            className="password"
            name="password"
            type="password"
          />
        </div>
        </Zoom>
        <div className="submit">
            <Slide bottom>
              <Button variant="contained" type="submit">
                Login
              </Button>
            </Slide>
          </div>
      </form>
    </Container>
  );
};

export default login;
