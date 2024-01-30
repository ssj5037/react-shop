import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl m-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
