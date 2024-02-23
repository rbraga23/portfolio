import { Nav } from "./components/Nav";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
// import { Contact } from "./pages/Contact";
import { MotionConfig } from "framer-motion";

export function App() {
  return (
    <main className="dark:text-white text-zinc-900 bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-800 bg-stone-100 bg-fixed">
      <Nav />
      <MotionConfig reducedMotion="user">
        <Home />
        <About />
        <Projects />
        {/* <Contact /> */}
      </MotionConfig>
    </main>
  );
}
