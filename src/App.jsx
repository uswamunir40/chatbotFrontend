import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";
import Notfound from "./pages/Notfound";
import { useAuth } from "./context/AuthContext";

function App() {
  const { isLoggedIn, user } = useAuth();
  console.log("Logged in:", isLoggedIn, "User:", user);
  return (
    <>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
