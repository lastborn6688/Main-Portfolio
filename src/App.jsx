import Snowfall from "react-snowfall";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ScrollingText from "./components/ScrollingText";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className=" bg-[rgb(7,14,38)] relative w-full">
      <Snowfall snowflakeCount={70} color="gray" />
      <ScrollingText />
            <a href="mailto:lblogics1@gmail.com"
        className="fixed bottom-[20rem] left-0 md:ml-6 ml-0 text-sm text-gray-100 hover:text-gray-400 rotate-90 origin-bottom-left">
        Email Me:lblogics1@gmail.com
      </a>
      <Navbar />
      <Socials/>
      <Hero />
      <About />
      <Skills/>
      <Experience/>
      <Footer/>
    </main>
  );
};

export default App;
