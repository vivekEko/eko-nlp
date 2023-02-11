import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/globals/Header";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <Header />
      {/* <LandingPage /> */}

      <Routes>
        <Route path="*" element={<Navigate to={"/"} replace={true} />} />
        <Route element={<LandingPage />} path={"/"} />
      </Routes>
    </div>
  );
}

export default App;
