import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: "About Us", to: "/about" },
      { label: "Careers", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
    Courses: [
      { label: "DSA", to: "/courses" },
      { label: "Web Development", to: "/courses" },
      { label: "Competitive Programming", to: "/courses" },
    ],
    Resources: [
      { label: "Blog", to: "/" },
      { label: "FAQs", to: "/contact" },
      { label: "Student Login", to: "/contact" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-xl font-bold text-white">
              Coding Ninjas
            </Link>
            <p className="mt-3 text-sm text-gray-400">
              Learn to code from India's top instructors and build a career in
              tech.
            </p>
          </div>

          {Object.entries(footerLinks).map(([sectionTitle, links]) => (
            <div key={sectionTitle}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                {sectionTitle}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} Coding Ninjas Clone. Built for QSkill internship
            assignment.
          </p>
          <div className="flex gap-4 text-sm text-gray-400">
            <span className="hover:text-orange-500 cursor-pointer transition-colors">
              Twitter
            </span>
            <span className="hover:text-orange-500 cursor-pointer transition-colors">
              LinkedIn
            </span>
            <span className="hover:text-orange-500 cursor-pointer transition-colors">
              Instagram
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
