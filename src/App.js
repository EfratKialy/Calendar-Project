import Calendar from "./Calendar";
import Login from "./Login";
import Event from "./Event";
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Calendar />} />
      <Route path="/calendar" element={<Calendar />} />
      {/* <Route path="/event" element={<Event />} /> */}

    </ Routes>
  </BrowserRouter>

    </>
  );
}

export default App;
