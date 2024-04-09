import React, { useContext } from "react";
import "./css/App.css";
import { context } from "./context/context";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
  const { count, setCount } = useContext(context);
  return (
    <>
      <AppBar />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
