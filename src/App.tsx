import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { About, Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Journey, Skills } from "./components/Skills";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </main>
    </>
  );
}
