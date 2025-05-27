
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { id: 'hero', label: 'الرئيسية' },
    { id: 'about', label: 'من نحن' },
    { id: 'services', label: 'الخدمات' },
    { id: 'contact', label: 'اتصل بنا' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-reverse space-x-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="text-right">
              <h1 className="text-lg lg:text-xl font-bold text-gray-800 leading-tight">
                أغابي لخدمات التمريض
              </h1>
              <p className="text-xs lg:text-sm text-primary-dark font-medium">
                رعاية صحية منزلية متميزة
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-reverse space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-gray-700 hover:text-primary font-medium transition-all duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={() => window.open('https://wa.me/201158738644?text=مرحباً، أود الاستفسار عن خدمات التمريض المنزلي', '_blank')}
              className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              احجز الآن
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="فتح القائمة"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 border-t border-gray-200">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-right py-3 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-300 font-medium"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-4">
              <button
                onClick={() => window.open('https://wa.me/201158738644?text=مرحباً، أود الاستفسار عن خدمات التمريض المنزلي', '_blank')}
                className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                احجز الآن
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
