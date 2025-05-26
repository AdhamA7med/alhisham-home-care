
import { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-75'
      } hover:scale-110 group`}
      aria-label="العودة للأعلى"
    >
      <svg className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
      </svg>
      
      {/* Ring effect */}
      <div className="absolute inset-0 rounded-full bg-primary/20 scale-110 animate-ping opacity-75"></div>
    </button>
  );
};

export default BackToTop;
