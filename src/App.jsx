import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import icon1 from "../src/assets/icon.webp";
import monuments from "./data";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';


const App = () => {

 const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    alert('Thank you for contacting us! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', destination: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="">
      <Navbar />

      <section
        id="home"
        className="flex flex-col md:flex-row items-center gap-0 bg-stone-100 m-4 md:m-10 overflow-hidden rounded-xl"
      >
        <div className="w-full md:w-1/2 h-64 md:h-96">
          <img className="h-full w-full object-cover" src={icon1} alt="home" />
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-emerald-800 text-white flex flex-col justify-center h-64 md:h-96">
          <span className="uppercase tracking-widest text-xs mb-4 opacity-70">
            Our Heritage
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            Discover the history that shaped us
          </h2>
          <p className="text-base md:text-lg opacity-90 italic font-light">
            "Soulful experience with landmarks that have withstood the test of
            time. We walk the talk."
          </p>
        </div>
      </section>

      <section id="explore" className="bg-stone-50 py-12 md:py-20">
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

        <div className="text-center mb-8 md:mb-10 px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4a0e0e]">
            Major Landmark Sites
          </h2>
          <p className="text-gray-500 italic text-sm md:text-base">
            Experience the timeless beauty of India
          </p>
        </div>

        <div className="w-full overflow-hidden border-y border-gray-200 py-6">
          <div className="marquee-inner">
            {[...monuments, ...monuments].map((mon, index) => (
              <div
                key={`${mon.id}-${index}`}
                className="min-w-[280px] md:min-w-[300px] h-[220px] mx-4 bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0 border border-gray-100"
              >
                <img
                  src={mon.image}
                  alt={mon.name}
                  className="h-1/2 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-[#140606] text-sm">
                    {mon.name}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    📍 {mon.location}
                  </p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-[10px] font-bold text-orange-600 uppercase tracking-tighter">
                      Heritage Site
                    </span>
                    <button className="text-[10px] underline font-bold">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-stretch bg-stone-100 m-4 md:m-10 overflow-hidden rounded-xl shadow-2xl">
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-[#4a0e0e] text-white flex flex-col justify-center min-h-[350px] md:min-h-[450px]">
          <span className="uppercase tracking-widest text-xs mb-4 text-amber-400 font-bold">
            Virasat • Our Heritage
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 md:mb-6 leading-tight">
            Discover the history <br /> that shaped us
          </h2>
          <p className="text-base md:text-lg opacity-90 italic font-light border-l-2 border-amber-500 pl-4">
            "Soulful experience with landmarks that have withstood the test of
            time. We walk the talk."
          </p>

          <button className="mt-6 md:mt-8 w-fit px-6 py-2 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white transition-all duration-300 rounded-sm text-sm md:text-base">
            Explore More
          </button>
        </div>

        <div className="w-full md:w-1/2 relative h-[350px] md:h-[450px] overflow-hidden bg-gray-200">
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

      <section id="about" className="py-12 md:py-20 bg-white overflow-hidden px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg"
                  alt="Indian Heritage Architecture"
                  className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 z-20 bg-[#4a0e0e] p-6 md:p-8 rounded-xl shadow-xl">
                <p className="text-amber-500 text-3xl md:text-4xl font-bold mb-1">15+</p>
                <p className="text-white text-xs md:text-sm font-medium tracking-widest uppercase">
                  Years of <br /> Excellence
                </p>
              </div>

              <div className="absolute -top-10 -left-10 w-48 h-48 md:w-64 md:h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="text-orange-600 font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#140606] mt-4 mb-4 md:mb-6 leading-tight">
                Preserving the Soul of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600">
                  Incredible India
                </span>
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                Founded with a passion for history and architectural marvels,
                <strong> XploreOurIndia</strong> is more than just a tourism
                platform. We are curators of experiences that bridge the gap
                between modernity and our ancient roots.
              </p>

              <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
                Whether it's the sun-drenched stones of Hawa Mahal or the silent
                grandeur of the Ajanta Caves, we ensure your journey is rooted
                in authenticity, comfort, and deep cultural insight.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 text-orange-600">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">Expert Guides</h4>
                    <p className="text-xs text-gray-500">
                      Certified history scholars
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">Eco-Tourism</h4>
                    <p className="text-xs text-gray-500">
                      Sustainable travel practices
                    </p>
                  </div>
                </div>
              </div>

              <button className="bg-[#4a0e0e] text-white px-6 md:px-8 py-3 md:py-4 rounded-md font-bold hover:bg-black transition-all shadow-lg flex items-center gap-3 group text-sm md:text-base">
                Explore Our Vision
                <span className="group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section id="contact" className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch With Us
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-4">
              Ready to explore incredible India? Contact our travel experts and let's plan your perfect journey together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 border border-orange-100">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                  Contact Information
                </h3>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-4 p-3 md:p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors">
                    <div className="bg-orange-500 p-2 md:p-3 rounded-full flex-shrink-0">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Office Address</h4>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">Sector 17, Panchkula<br/>Haryana 134109, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 md:p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                    <div className="bg-green-500 p-2 md:p-3 rounded-full flex-shrink-0">
                      <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Phone Numbers</h4>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">+91 98765 43210</p>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">+91 87654 32109</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 md:p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                    <div className="bg-blue-500 p-2 md:p-3 rounded-full flex-shrink-0">
                      <Mail className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Email Address</h4>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">info@indiatours.com</p>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">bookings@indiatours.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 md:p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                    <div className="bg-purple-500 p-2 md:p-3 rounded-full flex-shrink-0">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Business Hours</h4>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">Mon - Sat: 9:00 AM - 8:00 PM</p>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-orange-100 h-48 sm:h-64 md:h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-400 to-pink-500 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-6 md:p-8 z-10">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3 drop-shadow-lg">🇮🇳 Incredible India</h3>
                    <p className="text-base sm:text-lg md:text-xl drop-shadow-md">Discover the beauty of our heritage</p>
                    <div className="mt-4 flex justify-center gap-3 md:gap-4">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 border border-orange-100">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                Send Us a Message
              </h3>
              
              <div className="space-y-4 md:space-y-5">
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-800 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-9 md:pl-10 pr-4 py-2.5 md:py-3 text-sm md:text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                      placeholder="Enter Name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-800 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-9 md:pl-10 pr-4 py-2.5 md:py-3 text-sm md:text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-800 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-9 md:pl-10 pr-4 py-2.5 md:py-3 text-sm md:text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                      placeholder="Mob."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-800 mb-2">
                    Preferred Destination
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full pl-9 md:pl-10 pr-4 py-2.5 md:py-3 text-sm md:text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition appearance-none bg-white"
                    >
                      <option value="">Select a destination</option>
                      <option value="rajasthan">Rajasthan - Land of Kings</option>
                      <option value="kerala">Kerala - God's Own Country</option>
                      <option value="goa">Goa - Beach Paradise</option>
                      <option value="himachal">Himachal Pradesh</option>
                      <option value="kashmir">Kashmir - Heaven on Earth</option>
                      <option value="uttarakhand">Uttarakhand</option>
                      <option value="taj-mahal">Taj Mahal & Agra</option>
                      <option value="golden-triangle">Golden Triangle Tour</option>
                      <option value="south-india">South India Tour</option>
                      <option value="northeast">Northeast India</option>
                      <option value="other">Other Destination</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-800 mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition resize-none"
                    placeholder="Tell us about your travel plans, preferences, and any special requirements..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 hover:from-orange-600 hover:via-orange-700 hover:to-red-600 text-white font-bold py-3 md:py-4 text-sm md:text-base rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5" />
                  Send Message
                </button>

                <p className="text-xs text-gray-600 text-center">
                  We'll respond to your inquiry within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;