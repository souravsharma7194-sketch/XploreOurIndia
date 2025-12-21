const Navbar = () => {
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Xplore", id: "explore" },
    { name: "AboutUs", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="w-full h-20 sticky top-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      {" "}
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex-shrink-0 cursor-pointer">
          <h1 className="bg-gradient-to-r from-orange-600 via-stone-500 to-green-600 inline-block text-transparent bg-clip-text text-2xl font-bold tracking-tight">
            XploreOurIndia
          </h1>
        </div>

        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm uppercase tracking-wider hover:text-orange-600 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-semibold text-gray-600 hover:text-orange-600">
            Log In
          </button>
          <button className="bg-[#4a0e0e] text-white px-6 py-2.5 rounded-md text-sm font-bold hover:bg-black transition-all shadow-lg active:scale-95">
            Sign Up
          </button>
        </div>
      </div>
    </nav>

    // <nav className="w-full h-20 sticky top-0 left-0 z-50 flex items-center justify-around bg-white/80 backdrop-blur-md shadow-sm">

    //   <div className="flex items-center">
    //     <h1 className="bg-gradient-to-r from-orange-600 via-stone-500 to-green-600 inline-block text-transparent bg-clip-text text-2xl font-bold tracking-tight">
    //       XploreOurIndia
    //     </h1>
    //   </div>

    //   <div className="hidden md:block w-1/3">
    //     <ul className="flex justify-between items-center text-gray-700 font-medium">
    //       <li className="hover:text-orange-600 cursor-pointer transition"><a href="#home">Home</a></li>
    //       <li className="hover:text-stone-500 cursor-pointer transition"><a href="#explore">Xplore</a></li>
    //       <li className="hover:text-green-600 cursor-pointer transition"><a href="#about">AboutUs</a></li>
    //       <li className="hover:text-orange-600 cursor-pointer transition"><a href="#contact">Contact</a></li>
    //     </ul>
    //   </div>

    //   <button className="bg-[#4a0e0e] text-white px-5 py-2 rounded-md text-sm font-bold">
    //     Sign Up
    //   </button>

    // </nav>
  );
};

export default Navbar;
