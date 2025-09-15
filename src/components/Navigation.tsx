import { useState, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollPosition } from "@/hooks/useScrollReveal";

const navigationItems = [
  {
    label: "WHY GOOD FORESTS",
    href: "/why-good-forests",
  },
  {
    label: "ABOUT US",
    href: "/about",
    submenu: [
      { label: "Our Story", href: "/about/story" },
      { label: "Our Vision / Mission", href: "/about/vision" },
      { label: "Our Team", href: "/about/team" },
      { label: "Partners", href: "/about/partners" },
    ],
  },
  {
    label: "OUR WORK",
    href: "/work",
    submenu: [
      { label: "Conservation Programs", href: "/work/conservation" },
      { label: "Community Empowerment", href: "/work/community" },
      { label: "TreeO", href: "/work/treeo" },
      { label: "Operational Areas", href: "/work/areas" },
      { label: "FAQs", href: "/work/faqs" },
    ],
  },
  {
    label: "RESOURCES",
    href: "/resources",
    submenu: [
      { label: "Reports & Publications", href: "/resources/reports" },
      { label: "Educational Materials", href: "/resources/education" },
    ],
  },
  {
    label: "PARTNERS",
    href: "/partners",
    submenu: [
      { label: "Donate", href: "/partners/donate" },
      { label: "Opportunities", href: "/partners/opportunities" },
      { label: "Corporate Partnerships", href: "/partners/corporate" },
    ],
  },
];

export const Navigation = () => {
  const scrollY = useScrollPosition();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);

  // Hide header after hero section (assuming hero is ~100vh)
  const isHidden = scrollY > window.innerHeight * 0.8;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setExpandedSubmenu(null);
  };

  const toggleSubmenu = (label: string) => {
    setExpandedSubmenu(expandedSubmenu === label ? null : label);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-lg transition-all duration-700 ease-in-out ${
        isHidden
          ? "-translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className={`flex items-center space-x-3 transition-all duration-700 ease-out ${
              isLoaded ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
            }`}
          >
            <img
              style={{ width: "150px", height: "60px" }}
              src="/logo-2.png"
              alt="Good Forests Logo"
            />
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="relative w-8 h-8 flex flex-col justify-center items-center space-y-1 group"
              aria-label="Toggle mobile menu"
            >
              <span
                className={`w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div
                key={item.label}
                className={`transition-all duration-700 ease-out ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {item.submenu ? (
                  <div className="group relative">
                    <Button
                      variant="ghost"
                      className="text-sm font-medium text-white hover:text-accent flex items-center gap-1 hover:bg-white/10 smooth-transition relative overflow-hidden group px-4 py-2 rounded-lg"
                    >
                      <span className="relative z-10">{item.label}</span>
                      <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </Button>
                    <div className="absolute top-full left-0 w-56 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block px-4 py-3 text-sm text-white hover:text-accent hover:bg-white/10 smooth-transition relative overflow-hidden group rounded-lg mx-2"
                          >
                            <span className="relative z-10">
                              {subItem.label}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-sm font-medium text-white hover:text-accent smooth-transition hover:bg-white/10 px-3 py-2 rounded-lg relative overflow-hidden group"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Link>
                )}
              </div>
            ))}

            {/* Desktop Donate Button */}
            <div
              className={`transition-all duration-700 ease-out ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: `${(navigationItems.length + 1) * 100}ms`,
              }}
            >
              <Button
                asChild
                variant="outline"
                className="ml-8 px-6 py-2 font-bold text-sm tracking-wider smooth-transition relative overflow-hidden border-accent text-accent hover:bg-accent hover:text-forest-dark"
              >
                <Link to="/partners/donate">
                  <span className="relative z-10">DONATE</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={toggleMobileMenu}
          ></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white/10 backdrop-blur-xl border-l border-white/20 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Mobile Navigation Items */}
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-white/10 last:border-b-0"
                >
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="w-full flex items-center justify-between py-4 text-left text-white hover:text-accent transition-colors duration-200"
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            expandedSubmenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          expandedSubmenu === item.label
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-4 pb-4 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="block py-2 text-sm text-white/80 hover:text-accent transition-colors duration-200"
                              onClick={toggleMobileMenu}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block py-4 text-white hover:text-accent font-medium transition-colors duration-200"
                      onClick={toggleMobileMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Donate Button */}
              <div className="pt-6">
                <Button
                  asChild
                  variant="outline"
                  className="w-full py-3 font-bold text-sm tracking-wider border-accent text-accent hover:bg-accent hover:text-forest-dark"
                >
                  <Link to="/partners/donate">DONATE</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
