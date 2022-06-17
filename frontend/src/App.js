import MyNotes from "./screens/Mynotes/Mynotes";
import SingleNote from "./screens/SingleNote/SingleNote";
import RegisterScreen from "./screens/Registerscreen/Registerscreen";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import LoginScreen from "./screens/Loginscreen/Loginscreen";

import CreateNote from "./screens/SingleNote/CreateNote";
import { useState } from "react";
import Footer from "./components/Footer";
import LandingPage from "./screens/Landingpage/Landingpage";

function App() {
  const [search, setSearch] = useState("");
  return (
    <BrowserRouter>
      <Header setSearch={(s) => setSearch(s)} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/note/:id" element={<SingleNote />} />
        <Route path="/mynotes/createnote" element={<CreateNote />} />;
        <Route path="/mynotes" element={<MyNotes search={search} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

//  element= {({ history }) => (
//           <MyNotes search={search} history={history} />
//         // )}
