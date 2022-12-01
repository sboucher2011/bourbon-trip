import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./screens/Main";
import Results from "./screens/Results/Results";
import Survey from "./screens/Survey/Survey";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Survey" element={<Survey />}></Route>
        <Route path="/Results" element={<Results />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
