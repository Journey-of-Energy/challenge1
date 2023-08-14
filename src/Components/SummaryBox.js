import { Box } from "@mui/joy";
import React from "react";
import CategoryRow from "./CategoryRow";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import memoryIcon from "../images/icon-memory.svg";
import reactionIcon from "../images/icon-reaction.svg";
import verbalIcon from "../images/icon-verbal.svg";
import visualIcon from "../images/icon-visual.svg";

function gradient(color) {
  return `linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), ${color}`;
}

function SummaryBox() {
  return (
    <Box
      sx={{
        width: { sm: "50%", xs: "100%" },
        height: { sm: "100%", xs: "100%" },
        // p: { md: "38px 40px 46px 40px", xs: "24px 30px 30px 30px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        px: { sm: "40px", xs: "30px" },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#303B59",
          fontWeight: "700",
          fontSize: { sm: "24px", xs: "18px" },
          fontFamily: "Hanken Grotesk",
          m: "0px",
          p: "0px",
        }}
      >
        Summary
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // mt: { md: "28px", xs: "24px" },
          // mb: { md: "41px", xs: "24px" },
          height: "60%",
        }}
      >
        <CategoryRow
          color={gradient("#f55")}
          title="Reaction"
          score="80"
          fontColor={"#f55"}
          icon={reactionIcon}
        />
        <CategoryRow
          color={gradient("#FFB21E")}
          title="Memory"
          score="92"
          fontColor={"#FFB21E"}
          icon={memoryIcon}
        />
        <CategoryRow
          color={gradient("#00BB8F")}
          title="Verbal"
          score="61"
          fontColor={"#00BB8F"}
          icon={verbalIcon}
        />
        <CategoryRow
          color={gradient("#1125D6")}
          title="Visual"
          score="73"
          fontColor={"#1125D6"}
          icon={visualIcon}
        />
      </Box>
      <Button
        sx={{
          width: "288px",
          height: "56px",
          borderRadius: "128px",
          bgcolor: "#303B59",
          "&:hover": {
            background:
              "linear-gradient(180deg, #75F 0%, #6943FF 0.01%, #2F2CE9 100%)",
          },

          fontFamily: "Hanken Grotesk",
          fontSize: "18px",
          alignSelf: "center",
        }}
      >
        Continue
      </Button>
    </Box>
  );
}

export default SummaryBox;
