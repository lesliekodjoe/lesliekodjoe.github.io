import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import ProjectDetails from "./pages/ProjectDetails";
import PreLoader from "./components/PreLoader";

function App() {
  return (
    <Router>
      <PreLoader>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </PreLoader>
    </Router>
  );
}

export default App;
