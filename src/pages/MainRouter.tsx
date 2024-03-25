import { Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "./home/home.page";

export function MainRouter() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
