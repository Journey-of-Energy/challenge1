import { Box } from "@mui/joy";
import LeftBox from "./Components/LeftBox";
import SummaryBox from "./Components/SummaryBox";

function App() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { sm: "100vh", xs: "100vh" },
        display: "flex",
        flexDirection: { sm: "row", xs: "column" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "#fff",
          width: { sm: "48rem", xs: "100%" },
          height: { sm: "32rem", xs: "100%" },
          borderRadius: { sm: "32px", xs: "0px" },
          boxShadow: " 0px 30px 60px 0px rgba(61, 108, 236, 0.15)",
          overflow: "hidden",
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
        }}
      >
        <LeftBox />
        <SummaryBox />
      </Box>
    </Box>
  );
}

export default App;
