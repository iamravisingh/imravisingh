import { Route, Routes } from "react-router-dom";
import { Home, Blogs } from "../pages";

export const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
  );
};
