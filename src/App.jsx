import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <Header />
      <main className="max-w-screen-xl m-auto">
        <Outlet />
      </main>
      <Footer />
    </AuthProvider>
  );
}

export default App;
