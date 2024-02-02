import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { AuthProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Header />
        <main className="max-w-screen-xl m-auto">
          <Outlet />
        </main>
        <Footer />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
