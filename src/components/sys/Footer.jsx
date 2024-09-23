import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-orange-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Freight Experts</h3>
            <p>Providing reliable logistics solutions since 1998.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-orange-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>123 Logistics Street, City, Country</p>
            <p>Email: info@freightexperts.com</p>
            <p>Phone: +1 234 567 8900</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Freight Experts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
