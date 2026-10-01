import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ShoppingBag,
  Heart,
  Sun,
  Moon,
  Search,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useApp } from "../context/AppContext";

export default function Navbar() {
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState("");

  const { darkMode, setDarkMode } = useTheme();
  const { cartCount, wishlist } = useApp();

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate(`/products?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-950/95">
      <div className="container-custom flex h-20 items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tight">
          NEXORA<span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary dark:text-gray-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <form
            onSubmit={handleSearch}
            className="flex items-center rounded-full bg-gray-100 px-3 py-2 dark:bg-gray-800"
          >
            <Search size={17} />

            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-24 bg-transparent px-2 text-sm outline-none"
            />
          </form>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="icon-button"
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <Link to="/products" className="icon-button relative">
            <Heart size={19} />
            {wishlist.length > 0 && (
              <span className="badge">{wishlist.length}</span>
            )}
          </Link>

          <Link to="/products" className="icon-button relative">
            <ShoppingBag size={19} />
            {cartCount > 0 && (
              <span className="badge">{cartCount}</span>
            )}
          </Link>

          <Link to="/login" className="btn-primary">
            Login
          </Link>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenu && (
        <div className="border-t border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950 lg:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenu(false)}
                className="font-medium"
              >
                {link.name}
              </Link>
            ))}

            <div className="flex gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="icon-button"
              >
                {darkMode ? <Sun /> : <Moon />}
              </button>

              <Link to="/products" className="icon-button">
                <Heart />
              </Link>

              <Link to="/products" className="icon-button">
                <ShoppingBag />
              </Link>
            </div>

            <Link
              to="/login"
              className="btn-primary text-center"
              onClick={() => setMobileMenu(false)}
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}