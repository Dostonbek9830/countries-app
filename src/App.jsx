import "./App.css";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { SinglePage } from "./Pages/SinglePage";
import { MainComp } from "./Pages/MainComp/MainComp";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainComp />} />
        <Route path="/single/:name" element={<SinglePage />} />
      </Routes>
    </>
  );
};
