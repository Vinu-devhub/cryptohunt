import { Route, Routes } from "react-router-dom";
import Layout from "./components/views/Layout";
import FavoriteProvider from "./context/FavoriteContext";
import CoinDetail from "./pages/CoinDetail";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";

function App() {
  return (
    <FavoriteProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/coin/:id" element={<CoinDetail />} />
        </Route>
      </Routes>
    </FavoriteProvider>
  );
}

export default App;
