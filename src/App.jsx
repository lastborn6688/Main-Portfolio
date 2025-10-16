import Snowfall from "react-snowfall";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ScrollingText from "./components/ScrollingText";

const App = () => {
  return (
    <main className=" bg-[rgb(7,14,38)] relative w-full">
      <Snowfall snowflakeCount={70} color="gray" />
      <ScrollingText />
      <Navbar />
      <a href="mailto:ugochukwudanielmatthew@gmail.com"
        className="fixed bottom-[28rem] left-0 md:ml-6 ml-3 text-sm text-gray-100 hover:text-gray-400 rotate-90 origin-left">
        Ugochukwudanielmatthew@gmail.com
      </a>
      <Hero />
      <About />
    </main>
  );
};

export default App;
