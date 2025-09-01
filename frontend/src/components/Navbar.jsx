import teendomLogo from "../assets/teendom.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg fixed top-0 left-0 right-0 z-50">
      {/* Logo + Brand */}
      <div className="flex items-center space-x-3">
        <img
          src={teendomLogo}
          alt="Teendom Logo"
          className="w-12 h-12 object-cover rounded-full border-2 border-white shadow-md"
        />
        <span className="text-2xl font-bold text-white">Teendom</span>
      </div>

      {/* Links */}
      <ul className="hidden md:flex space-x-6 font-semibold text-white">
        <li>
          <a href="#" className="hover:text-yellow-300 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow-300 transition">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow-300 transition">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow-300 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
