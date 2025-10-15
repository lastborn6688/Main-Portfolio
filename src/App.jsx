import Snowfall from "react-snowfall";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";

const App = () => {
  return (
    <main className=" bg-[rgb(7,14,38)] relative w-full">
      <Snowfall snowflakeCount={70} color="gray" />
      <Navbar />
      <Hero />
      <About />
    </main>
  );
};

export default App;
