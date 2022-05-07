import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import SharedRoute from "./pages/Shared";
import ProtectedRoute from "./pages/Protected";
import Nin from "./pages/Nin";
import BioData from "./pages/BioData";
import Edu from "./pages/Edu";
import Banking from "./pages/Banking";
import Congrats from "./pages/Congrats";
import Work from "./pages/Work";
import Disclaimer from "./pages/Disclaimer";
import Residence from "./pages/Residence";
import Contact from "./pages/Contact";
import Prev from "./pages/Prev";
// import Face from "./pages/Face";
import { WebcamCapture } from "./pages/Face";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
      <ToastContainer />
      {/* <Sidebar />
      <Top /> */}
      {/* <Navbar /> */}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedRoute />
            </ProtectedRoute>
          }
        >
         
          <Route index element={<BioData />} />
          <Route path="education-data" element={<Edu />} />
          <Route path="face-capture" element={<WebcamCapture />} />
          <Route path="residence" element={<Residence />} />
          <Route path="contact" element={<Contact />} />         
         
          <Route path="banking-info" element={<Banking />} />
          <Route path="cg" element={<Congrats />} />
          <Route path="work" element={<Work />} />
          <Route path="prev" element={<Prev />} />
          <Route path="nin" element={<Nin />} />
          <Route path="disclaimer" element={<Disclaimer />} />
        </Route>
       
        <Route path="landing" element={<Landing />} />
        
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
