"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "../../public/logo_gyanlab.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Notes", path: "/notes" },
    // { name: "Gallery", path: "/gallery" },
    { name: "YouTube", path: "/youtube" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 bg-none transition-all duration-300 ${
      isScrolled ? "bg-none " : "bg-none "
    }`}>
      <div className={`max-w-7xl md:mx-auto px-3 sm:px-6 lg:pl-2 ${isOpen && "pb-3 lg:pb-0"}
         bg-white text-primary shadow-md rounded-lg lg:rounded-full md:mt-3 mt-2 mx-2`}>
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary p-[1px] rounded-full">
              <Image
              width={10}
              height={10}
              src={Logo}
              alt="Logo Gyanlab"
              className="h-12 w-12 " />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Gyanlab Tutorial</h1>
              <p className="text-xs text-primary/70">Wadala, Mumbai</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm text-primary hidden lg:block font-medium transition-colors duration-200 hover:text-secondary ${
                  location === item.path ? "text-secondary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-3">
              <Link href="/signin">
                <Button variant="outline" size="sm" className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>Sign In</span>
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm">
                  Join Classes
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-primary rounded-xl animate-fade-in px-3">
            <div className="px-2 py-2 space-y-1 block lg:hidden">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-secondary ${
                    location === item.path ? "text-secondary" : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="md:hidden flex flex-col space-y-2 pt-4">
                <Link href="/signin" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">
                    Join Classes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
