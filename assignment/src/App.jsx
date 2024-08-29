import DataForm from "./components/form";
import HomePage from "./components/homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<DataForm />} />
      </Routes>
    </div>
  );
}

export default App;
