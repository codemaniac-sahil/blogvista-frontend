import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

/**
 * Logs out the currently logged in user. This is a non - destructive action as there is no guarantee that the user will be logged out of the system at this point.
 *
 *
 * @return { Object } React component that renders the logout page after navigating to the logout page and returning
 */
function Logout() {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://blog-vista.centralindia.cloudapp.azure.com/logout", {
      method: "GET",
      credentials: "include",
    }).then(() => {
      dispatch({ type: "USER", payload: false });
      navigate("/login", { replace: true });
    });
  }, [dispatch, navigate]);
  return <div>Logout</div>;
}

export default Logout;
