import "./App.css";
import { Route, Routes } from "react-router-dom";
import Mainn from "./Component/Mainn";
import Learn from "./Component/Learn";
import FocusArea from "./Component/FocusArea";
import About from "./Component/About";
import Contact from "./Component/main/Contact";
import Layout from "./Component/Layout";
import Talent from "./Component/Talent";
import CreateAccount from "./Admin/CreateAccount";
import Login from "./Admin/Login";
import ForgotPassword from "./Admin/ForgotPassword";
import Dashboard from "./Admin/Admin";
import Admin from "./Admin/Admin";
import TalentList from "./Admin/TalentList";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Mainn />}></Route>
          <Route path="/contactus" element={<Contact />}></Route>
          <Route path="/learn" element={<Learn />}></Route>
          <Route path="/focusarea" element={<FocusArea />}></Route>
          <Route path="/aboutus" element={<About />}></Route>
          <Route path="/talent" element={<Talent />}></Route>
        </Route>

        <Route path="/create" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/useradd" element={<Admin />}></Route>
        <Route path="/talentalist" element={<TalentList />}></Route>
      </Routes>
    </>
  );
}

export default App;
