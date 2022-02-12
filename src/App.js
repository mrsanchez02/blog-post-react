import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import PostParallax from "./pages/PostParallax";
import PostSticky from "./pages/PostSticky";

function App() {
  
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" /> */}
        <Route path="parallax-post" element={<PostParallax/>} />
        <Route path="sticky-post" element={<PostSticky/> } />
      </Routes>
      <Header/>
    </Router>
  );
}

export default App;
