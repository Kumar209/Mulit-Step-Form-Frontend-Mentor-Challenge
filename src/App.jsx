import { BrowserRouter, Routes, Route } from "react-router-dom";

import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";
import Step5 from "./pages/Step5";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/select-plan" element={<Step2 />} />
          <Route path="/add-ons" element={<Step3 />} />
          <Route path="/summary" element={<Step4 />} />
          <Route path="/thank-you" element={<Step5 />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
