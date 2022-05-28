import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import myVideo from "../Assets/Videos/sports.mp4";

function HomePage() {
  const [loading, setLoading] = useState(true);

  const handleVideoLoad = () => {
    console.log("Video is loaded");
    setLoading(false);
  };

  useEffect(() => {}, []);

  return (
    <Container maxWidth="" className="landing-container">
      <div className="landing-video-container" style={{ height: "inherit" }}>
        <Box sx={{ bgcolor: "#cfe8fc", height: "inherit" }}>
          {loading === true ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "inherit",
              }}
            >
              <CircularProgress />
            </Box>
          ) : null}
          <>
            <video
              autoPlay
              loop
              muted
              className="landing-video"
              width="100"
              onLoadedData={handleVideoLoad}
              style={{ display: `${loading === true ? "none" : "block"}` }}
            >
              <source src={myVideo} type="video/mp4" />
            </video>
          </>
        </Box>
      </div>
    </Container>
  );
}

export default HomePage;
