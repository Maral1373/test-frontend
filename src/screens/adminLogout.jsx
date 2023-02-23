import { useEffect } from "react";
import { removeAdminToken } from "../api/token";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    removeAdminToken();
    navigate("/admin/login");
  }, []);
  return <div>Logout</div>;
}

export default Logout;
