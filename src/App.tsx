import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import ProjectDetails from "./pages/ProjectDetails";
import PreLoader from "./components/PreLoader";
import Template from "./Template";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <PreLoader>
        <Template>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Template>
      </PreLoader>
    </Router>
  );
}

export default App;
