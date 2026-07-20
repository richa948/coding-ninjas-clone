import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import courses from "../data/courses";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const categories = [...new Set(courses.map((course) => course.category))];

  const navLinkClasses = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
      isActive
        ? "text-orange-600 bg-orange-50"
        : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
    }`;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-orange-600">
            Coding Ninjas
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClasses} end>
              Home
            </NavLink>

            {/* Courses dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCoursesOpen((prev) => !prev)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md flex items-center gap-1"
              >
                Courses
                <span
                  className={`transition-transform ${isCoursesOpen ? "rotate-180" : ""}`}
                >
                  ▾
                </span>
              </button>

              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-100 py-2">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/courses?category=${encodeURIComponent(category)}`}
                      onClick={() => setIsCoursesOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/about" className={navLinkClasses}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses}>
              Contact
            </NavLink>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
            <Link
              to="/login"
              className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/contact"
              className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 px-4 py-3 space-y-1">
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
          <NavLink
            to="/"
            className={navLinkClasses}
            end
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            className={navLinkClasses}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Courses
          </NavLink>
          <NavLink
            to="/about"
            className={navLinkClasses}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={navLinkClasses}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/login"
            className={navLinkClasses}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
