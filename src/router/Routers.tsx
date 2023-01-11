import { Route, Routes } from "react-router-dom";
import LoginSuccess from "../pages/LoginSucess";
import MainPage from "../pages/Main";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginSuccess />} />
    </Routes>
  );
};

export default Routers;
