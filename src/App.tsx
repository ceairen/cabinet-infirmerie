import styles from "./App.module.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import Separator from "./components/Separator/Separator";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <main className={styles.App}>
        <BrowserRouter>
          <Section>
            <h1>Cabinet d'infirmerie</h1>
          </Section>
          <Separator />
          <Section>
            <Navbar />
          </Section>
          <Separator />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/accueil"
              element={<Navigate to="/" replace />}
            ></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </>
  );
}

export default App;
