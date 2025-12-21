import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import icon1 from "../src/assets/icon.webp";
const App = () => {
  return (
    <div className="">
      <Navbar />

      <section
        id="home"
        className="flex flex-col md:flex-row items-center gap-0 bg-stone-100 m-10 overflow-hidden rounded-xl"
      >
        <div className="w-full md:w-1/2 h-96">
          <img className="h-full w-full object-cover" src={icon1} alt="home" />
        </div>
        <div className="w-full md:w-1/2 p-12 bg-emerald-800 text-white flex flex-col justify-center h-96">
          <span className="uppercase tracking-widest text-xs mb-4 opacity-70">
            Our Heritage
          </span>
          <h2 className="text-4xl font-bold mb-6">
            Discover the history that shaped us
          </h2>
          <p className="text-lg opacity-90 italic font-light">
            "Soulful experience with landmarks that have withstood the test of
            time. We walk the talk."
          </p>
        </div>
      </section>

      <section id="explore" className="min-h-screen"></section>

      <section className="flex flex-col md:flex-row items-stretch bg-stone-100 m-10 overflow-hidden rounded-xl shadow-2xl">
        {/* Text Side */}
        <div className="w-full md:w-1/2 p-12 bg-[#4a0e0e] text-white flex flex-col justify-center min-h-[450px]">
          <span className="uppercase tracking-widest text-xs mb-4 text-amber-400 font-bold">
            Virasat • Our Heritage
          </span>
          <h2 className="text-4xl font-serif font-bold mb-6 leading-tight">
            Discover the history <br /> that shaped us
          </h2>
          <p className="text-lg opacity-90 italic font-light border-l-2 border-amber-500 pl-4">
            "Soulful experience with landmarks that have withstood the test of
            time. We walk the talk."
          </p>

          <button className="mt-8 w-fit px-6 py-2 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white transition-all duration-300 rounded-sm">
            Explore More
          </button>
        </div>

        {/* Video Side */}
        <div className="w-full md:w-1/2 relative h-[450px] md:h-auto overflow-hidden bg-gray-200">
          <video
            key="taj-mahal-loop"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          >
            <source
              src="https://player.vimeo.com/external/384732524.sd.mp4?s=346591783424683457&profile_id=164&oauth2_token_id=57447761"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-orange-900/10 mix-blend-multiply"></div>
        </div>
      </section>

      <section id="about" className="min-h-screen"></section>

      <section id="contact" className="min-h-screen "></section>

      <section className="min-h-screen"></section>

      <Footer />
    </div>
  );
};

export default App;
