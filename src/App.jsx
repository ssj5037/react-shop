import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
