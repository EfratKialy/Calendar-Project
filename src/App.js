import Calendar from "./pages/Calendar";
import Login from "./pages/Login";
import RegisterIn from "./pages/Register";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, createContext } from "react";

export const userIdContext = createContext(null);


function App() {
const[userId,setUserId]=useState("")

  return (
    <userIdContext.Provider value={{userId,setUserId}}>  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/register/calendar" element={<Calendar />} />
      <Route path="/register" element={<RegisterIn />} />
    </ Routes>
  </BrowserRouter>

    </userIdContext.Provider>
  );
}

export default App;
