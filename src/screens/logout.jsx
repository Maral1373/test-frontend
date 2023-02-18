import { useEffect } from "react";
import { removeToken } from "../api/token";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    removeToken();
    navigate("/login");
  }, []);
  return <div>Logout</div>;
}

export default Logout;
