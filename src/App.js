import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import HomePage from "./Pages/Home/HomePage";
import SettingPage from "./Pages/Home/SettingPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Dashboard />}>
            <Route path="" element={<HomePage />}></Route>
            <Route path="/menu2" element={<SettingPage />}></Route>
            <Route path="/dashboard" element={<SettingPage />}></Route>
            <Route path="/message" element={<SettingPage />}></Route>
            <Route path="/notification" element={<SettingPage />}></Route>
            <Route path="/settings" element={<SettingPage />}></Route>
            <Route path="/logout" element={<SettingPage />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
