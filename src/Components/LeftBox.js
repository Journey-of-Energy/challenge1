import { Box } from "@mui/joy";
import React from "react";
import { Typography } from "@mui/joy";

function LeftBox() {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(180deg, #75F 0%, #6943FF 0.01%, #2F2CE9 100%)",
        width: { sm: "50%", xs: "100%" },
        height: { sm: "100%", xs: "70%" },
        borderRadius: { sm: "32px", xs: "0px 0px 32px 32px" },
        boxShadow: { sm: "", xs: "0px 30px 60px 0px rgba(61, 108, 236, 0.15)" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        textAlign: "center",
        px: "55px",
        // pb: { md: "55px", xs: "40px" },
        // pt: { md: "38px", xs: "24px" },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#CAC9FF",
          fontSize: {
            md: "24px",
            xs: "18px",
          },
          fontFamily: "Hanken Grotesk",
          fontWeight: "700",
          m: "0px",
          p: "0px",
        }}
      >
        Your Result
      </Typography>
      <Box
        sx={{
          width: { md: "10rem", xs: "8rem" },
          height: { md: "10rem", xs: "8rem" },
          backgroundImage:
            "linear-gradient(to bottom,  hsla(256, 72%, 46%, 1),  hsla(241, 72%, 46%, 0) )",
          borderRadius: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // my: { md: "", xs: "24px" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#fff",
            fontSize: {
              md: "72px",
              xs: "56px",
            },
            fontFamily: "Hanken Grotesk",
            fontWeight: "800",
            lineHeight: "72px",
            m: "0px",
            p: "0px",
          }}
        >
          76
        </Typography>

        <Typography
          sx={{
            color: "#CAC9FF",
            fontSize: {
              md: "18px",
              xs: "16px",
            },
            fontFamily: "Hanken Grotesk",
            fontWeight: "700",
            opacity: "0.5168",
            m: "0px",
            p: "0px",
          }}
        >
          of 100
        </Typography>
      </Box>

      <Typography
        variant="h2"
        sx={{
          color: "#fff",
          fontSize: {
            md: "32px",
            xs: "24px",
          },
          fontFamily: "Hanken Grotesk",
          fontWeight: "700",
          m: "0px",
          p: "0px",
        }}
      >
        Great
      </Typography>
      <Typography
        sx={{
          color: "#CAC9FF",
          fontSize: {
            md: "18px",
            xs: "16px",
          },
          fontFamily: "Hanken Grotesk",
          fontWeight: "500",
          m: "0px",
          p: "0px",
        }}
      >
        Your performance exceed 65% of the people conducting the test here!
      </Typography>
    </Box>
  );
}

export default LeftBox;
