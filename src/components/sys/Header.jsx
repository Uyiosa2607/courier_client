import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-orange-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold">Freight Experts</h1>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-orange-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-200">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center py-4">
            <li>
              <Link to="/" className="block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
