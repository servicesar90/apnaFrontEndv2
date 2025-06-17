import  { useState} from "react";
import { AnimatePresence } from "framer-motion";

import { useNavigate, Link } from "react-router-dom";

const LandingNavbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
      
  return (
    <motion.header
      className="z-40 bg-white/80 backdrop-blur-md border-b border-blue-100/50 sticky top-0"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
           
            <Link to="/">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                <img
                  src="/unigrowLogo (1).png"
                  alt="Logo"
                  style={{ height: "40px" }}
                />
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Features", "About Us", "Contact Us"].map(
              (item, index) => (
                <motion.a
                  key={index}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer relative group"
                  whileHover={{ y: -2 }}
                  onClick={() => navigate(`/${item.replace(" ","-")}`)}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0c39cf] group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              )
            )}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-[#0c39cf]"
            >
              Employee Login
            </Button>
          
            <Button className="bg-gradient-to-r from-[#336ECF] to-[#0c39cf] hover:from-blue-600 hover:[#336ECF]">
              Employer Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-blue-100/50"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {["Home", "features", "About Us", "Contact Us"].map(
                (item, index) => (
                  <motion.a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item}
                  </motion.a>
                )
              )}
              <div className="pt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full border-blue-200 text-blue-600"
                >
                  Employee Login
                </Button>
                
                <Button className="w-full bg-gradient-to-r from-[#336ECF] to-[#0c39cf]">
                  Employer Login
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default LandingNavbar

