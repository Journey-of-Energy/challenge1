import { Box } from "@mui/joy";
import LeftBox from "./Components/LeftBox";

function App() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LeftBox />
    </Box>
  );
}

export default App;
