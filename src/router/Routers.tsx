import { Route, Routes } from "react-router-dom";
import LoginSuccess from "../pages/LoginSucess";
import MainPage from "../pages/Main";
import Mypage from "../pages/Mypage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginSuccess />} />
      <Route path="/mypage" element={<Mypage />} />
    </Routes>
  );
};

export default Routers;
