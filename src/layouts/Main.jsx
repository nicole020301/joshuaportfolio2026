import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";
import { ThemeProvider } from "../context/ThemeContext";

const Main = () => {
  return (
    <ThemeProvider>
      <div className="relative">
        <NavBar />
        <Outlet />
        <div>
          <Footer />
        </div>
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
};

export default Main;
