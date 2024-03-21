import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserAccount from "./components/UserAccount";
import MyProfile from "./components/MyProfile";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserAccount />}>
          <Route index element={<MyProfile />} />
          <Route path="/mybookings" element={<UnderConstruction />} />
          <Route path="/mywallet" element={<UnderConstruction />} />
          <Route path="/settings" element={<UnderConstruction />} />
          <Route path="/support" element={<UnderConstruction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
