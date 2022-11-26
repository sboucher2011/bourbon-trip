import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./screens/Main";
import Survey from "./screens/Survey";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Survey" element={<Survey />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
