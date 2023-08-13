import { Box } from "@mui/joy";
import React from "react";
import CategoryRow from "./CategoryRow";

function gradient(color) {
  return `linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), ${color}`;
}

function SummaryBox() {
  return (
    <Box
      sx={{
        width: "50%",
        height: "100%",

        p: "38px 40px 0px 40px",
      }}
    >
      <h3>Summary</h3>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          mt: "28px",
        }}
      >
        <CategoryRow color={gradient("#f55")} />
        <CategoryRow color={gradient("#FFB21E")} />
        <CategoryRow color={gradient("#00BB8F")} />
        <CategoryRow color={gradient("#1125D6")} />
      </Box>
    </Box>
  );
}

export default SummaryBox;
