import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";
import CreditCards from "./pages/creditCards";
import "./App.css";
import Layout from "./components/layout/layout";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/credit-cards" element={<CreditCards />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
