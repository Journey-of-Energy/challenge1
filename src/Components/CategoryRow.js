import { Box, Typography } from "@mui/joy";
import React from "react";

function CategoryRow(props) {
  return (
    <Box
      sx={{
        width: "288px",
        height: "56px",
        background: `${props.color}`,
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        p: "16px",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", gap: "12px" }}>
        <img src={props.icon} />
        <Typography
          sx={{
            color: `${props.fontColor}`,
            fontFamily: "Hanken Grotesk",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >{`${props.title}`}</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "8px" }}>
        <Typography
          sx={{
            color: "#303B59",
            fontSize: "18px",
            fontWeight: "700",
            fontFamily: "Hanken Grotesk",
          }}
        >{`${props.score}`}</Typography>
        <Typography
          sx={{
            color: "#303B59",
            fontSize: "18px",
            fontWeight: "700",
            fontFamily: "Hanken Grotesk",
            opacity: "0.5",
          }}
        >
          {"/"}
        </Typography>
        <Typography
          sx={{
            color: "#303B59",
            fontSize: "18px",
            fontWeight: "700",
            fontFamily: "Hanken Grotesk",
            opacity: "0.5",
          }}
        >
          {"100"}
        </Typography>
      </Box>
    </Box>
  );
}

export default CategoryRow;
