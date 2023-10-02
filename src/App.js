import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";

import Signup from "./pages/Signup";
import UserDasboard from "./pages/UserDasboard";
import Blog from "./pages/Blog";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./context/Authcontext";
import Logout from "./pages/Logout";
import CreateBlog from "./pages/CreateBlog";
import PrivateRoute from "./PrivateRoute/PrivateRoute.js";


export const UserContext = createContext();

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/addblog" element={<CreateBlog />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<UserDasboard />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Routing />
      </UserContext.Provider>
    </>
  );
}

export default App;
