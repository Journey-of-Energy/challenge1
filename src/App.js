import { Box } from "@mui/joy";
import LeftBox from "./Components/LeftBox";
import SummaryBox from "./Components/SummaryBox";

function App() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "#fff",
          width: { md: "736px", xs: "100vw" },
          height: { md: "512px", xs: "100vh" },
          borderRadius: { md: "32px", xs: "0px" },
          boxShadow: " 0px 30px 60px 0px rgba(61, 108, 236, 0.15)",
          overflow: "hidden",
          display: "flex",
        }}
      >
        <LeftBox />
        <SummaryBox />
      </Box>
    </Box>
  );
}

export default App;
