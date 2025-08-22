import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6 xl:px-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - About */}
        <div>
          <h2 className="text-lg font-bold text-white mb-3">FitLife</h2>
          <p className="text-sm">
            Fuel your fitness and elevate your lifestyle. If you enjoyed this
            app, check out more of my projects on my{" "}
            <a
              aria-label="Portfolio link"
              href="https://yasser-abdalla.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Portfolio
            </a>
            .
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <a
            aria-label="Home section"
            href="#home"
            className="hover:text-primary transition"
          >
            Home
          </a>
          <a
            aria-label="About section"
            href="#about"
            className="hover:text-primary transition"
          >
            About
          </a>
        </div>

        {/* Right - Socials */}
        <div>
          <h3 className="text-white font-semibold mb-2">Follow Me</h3>
          <div className="flex space-x-4">
            <a
              href="https://github.com/YazzerAbdalla"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github profile"
              className="hover:text-primary transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/yasser-abdalla-profile/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin profile"
              className="hover:text-primary transition"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Yasser Abdalla. All rights reserved.
      </div>
    </footer>
  );
}
