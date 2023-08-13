import { Box } from "@mui/joy";
import React from "react";

function LeftBox() {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(180deg, #75F 0%, #6943FF 0.01%, #2F2CE9 100%)",
        width: { md: "50%", xs: "100%" },
        height: { md: "512px", xs: "44%" },
        borderRadius: { md: "32px", xs: "0px 0px 32px 32px" },
        boxShadow: { md: "", xs: "0px 30px 60px 0px rgba(61, 108, 236, 0.15)" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "center",
        px: "55px",
        pb: "55px",
        pt: "38px",
      }}
    >
      <h3>Your Result</h3>
      <Box
        sx={{
          width: { md: "200px", xs: "140px" },
          height: { md: "200px", xs: "140px" },
          backgroundImage:
            "linear-gradient(to bottom,  hsla(256, 72%, 46%, 1),  hsla(241, 72%, 46%, 0) )",
          borderRadius: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>76</h1>

        <p>of 100</p>
      </Box>
      <h2>Great</h2>
      <p>Your performance exceed 65% of the people conducting the test here!</p>
    </Box>
  );
}

export default LeftBox;
