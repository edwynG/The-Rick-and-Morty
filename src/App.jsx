import React, { useContext } from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { context } from "./context/context";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
  const { count, setCount } = useContext(context);
  return (
    <>
      <Router>
        <AppBar />
        <MainContent />
        <Footer />
      </Router>
    </>
  );
}

export default App;
