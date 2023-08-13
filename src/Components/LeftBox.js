import { Box } from "@mui/joy";
import React from "react";

function LeftBox() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3>Your Result</h3>
      <Box
        sx={{
          bgcolor: "blue",
          borderRadius: "100%",
          width: 300,
          height: 300,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>76</h1>
        <h3>of 100</h3>
      </Box>
      <h2>Great</h2>
      <p>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </Box>
  );
}

export default LeftBox;
