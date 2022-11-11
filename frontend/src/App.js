// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from './hooks/useAuth';


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [user, token] = useAuth();

  const [comments, setComments] = useState([]);
  // fetch all comments test
  const fetchComments = async () => {
    try {
        let response = await axios.get(`http://127.0.0.1:8000/api/comments/`,{headers: {
          Authorization: "Bearer " + token,
      }
  });
        setComments(response.data);
    } catch (error) {
        console.log(error);
    }
}

  useEffect(() => {
    fetchComments();
  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/:id" element={<VideoPage/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
