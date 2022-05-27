import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import myVideo from "../Assets/Videos/sports.mp4";

function HomePage() {
  return (
    <Container maxWidth="" className="landing-container">
      <Box sx={{ bgcolor: "#cfe8fc" }} />
      <div className="landing-video-container">
        <video autoPlay loop muted className="landing-video" width="100">
          <source src={myVideo} type="video/mp4" />
        </video>
      </div>
    </Container>
  );
}

export default HomePage;
