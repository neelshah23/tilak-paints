import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md bg-white/80' : ''
    }`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-indigo-500 flex items-center justify-center">
            <span className="text-white font-bold">TP</span>
          </div>
          <span className="ml-2 text-xl font-poppins font-bold">Tilak<span className="text-primary">Paints</span></span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-gray-900 hover:text-primary transition-colors font-medium">Home</a>
          <a href="#features" className="text-gray-900 hover:text-primary transition-colors font-medium">Features</a>
          <a href="#colors" className="text-gray-900 hover:text-primary transition-colors font-medium">Colors</a>
          <a href="#testimonials" className="text-gray-900 hover:text-primary transition-colors font-medium">Testimonials</a>
          <a href="#waitlist">
            <Button variant="default" className="rounded-full font-semibold">
              Join Waitlist
            </Button>
          </a>
        </div>
        
        <Button 
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>
      
      {mobileMenuOpen && (
        <div className="md:hidden container mx-auto px-4 py-4 bg-white shadow-lg rounded-lg mt-2 absolute left-0 right-0">
          <div className="flex flex-col space-y-4">
            <a href="#home" onClick={closeMobileMenu} className="text-gray-900 hover:text-primary transition-colors font-medium">Home</a>
            <a href="#features" onClick={closeMobileMenu} className="text-gray-900 hover:text-primary transition-colors font-medium">Features</a>
            <a href="#colors" onClick={closeMobileMenu} className="text-gray-900 hover:text-primary transition-colors font-medium">Colors</a>
            <a href="#testimonials" onClick={closeMobileMenu} className="text-gray-900 hover:text-primary transition-colors font-medium">Testimonials</a>
            <a href="#waitlist" onClick={closeMobileMenu}>
              <Button variant="default" className="rounded-full font-semibold w-full">
                Join Waitlist
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
