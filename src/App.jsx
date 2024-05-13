import { Navigate, Route, Routes } from "react-router-dom";
import Challenge1 from "./pages/Challenge1";
import Challenge2 from "./pages/Challenge2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/challenge1"} />} />
      <Route path="/challenge1" element={<Challenge1 />} />
      <Route path="/challenge2" element={<Challenge2 />} />
    </Routes>
  );
}

export default App;
