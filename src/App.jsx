import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import icon1 from "../src/assets/icon.webp";
import monuments from "./data";
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

  <section id="explore" className="bg-stone-50 py-20">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        .marquee-inner:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif font-bold text-[#4a0e0e]">Major Landmark Sites</h2>
        <p className="text-gray-500 italic">Experience the timeless beauty of India</p>
      </div>

      <div className="w-full overflow-hidden border-y border-gray-200 py-6">
        
        <div className="marquee-inner">
          
          {[...monuments, ...monuments].map((mon, index) => (
            <div 
              key={`${mon.id}-${index}`} 
              className="min-w-[300px] h-[220px] mx-4 bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0 border border-gray-100"
            >
              <img 
                src={mon.image} 
                alt={mon.name} 
                className="h-1/2 w-full object-cover" 
              />
              <div className="p-4">
                <h3 className="font-bold text-[#140606] text-sm">{mon.name}</h3>
                <p className="text-xs text-stone-500 mt-1">📍 {mon.location}</p>
                <div className="mt-3 flex justify-between items-center">
                   <span className="text-[10px] font-bold text-orange-600 uppercase tracking-tighter">Heritage Site</span>
                   <button className="text-[10px] underline font-bold">Details</button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>

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

<section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* 1. IMAGE SIDE */}
          <div className="w-full lg:w-1/2 relative">
            {/* Main Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg" 
                alt="Indian Heritage Architecture" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Experience Card */}
            <div className="absolute -bottom-10 -right-10 z-20 bg-[#4a0e0e] p-8 rounded-xl shadow-xl hidden md:block">
              <p className="text-amber-500 text-4xl font-bold mb-1">15+</p>
              <p className="text-white text-sm font-medium tracking-widest uppercase">Years of <br /> Excellence</p>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          </div>

          {/* 2. TEXT SIDE */}
          <div className="w-full lg:w-1/2">
            <span className="text-orange-600 font-bold uppercase tracking-[0.3em] text-sm">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#140606] mt-4 mb-6 leading-tight">
              Preserving the Soul of <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600">
                Incredible India
              </span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded with a passion for history and architectural marvels, 
              <strong> XploreOurIndia</strong> is more than just a tourism platform. 
              We are curators of experiences that bridge the gap between 
              modernity and our ancient roots.
            </p>

            <p className="text-gray-600 mb-8">
              Whether it’s the sun-drenched stones of Hawa Mahal or the silent 
              grandeur of the Ajanta Caves, we ensure your journey is rooted 
              in authenticity, comfort, and deep cultural insight.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 text-orange-600">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Expert Guides</h4>
                  <p className="text-xs text-gray-500">Certified history scholars</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Eco-Tourism</h4>
                  <p className="text-xs text-gray-500">Sustainable travel practices</p>
                </div>
              </div>
            </div>

            <button className="bg-[#4a0e0e] text-white px-8 py-4 rounded-md font-bold hover:bg-black transition-all shadow-lg flex items-center gap-3 group">
              Explore Our Vision
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
      <section id="contact" className="min-h-screen "></section>

      <section className="min-h-screen"></section>

      <Footer />
    </div>
  );
};

export default App;
