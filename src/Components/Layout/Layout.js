import { useEffect, useState } from "react";
import Header from "./Header";
import Loading from "../Loader";
import AppRoutes from "./AppRoutes";
import Footer from "./Footer";

const Layout = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let timer;

    if (window.location.pathname === "/") {
      timer = setTimeout(() => setLoading(false), 5000);
    } else {
      setLoading(false);
    }

    // Cleanup timeout on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main>
          <Header />
          <AppRoutes />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Layout;
