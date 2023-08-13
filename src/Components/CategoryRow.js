import { Box } from "@mui/joy";
import React from "react";

function CategoryRow(props) {
  return (
    <Box
      sx={{
        width: "288px",
        height: "56px",
        background: `${props.color}`,
        borderRadius: "12px",
      }}
    ></Box>
  );
}

export default CategoryRow;
