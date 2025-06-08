
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-medical-darkGray to-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-4 text-primary">الهشام لخدمات التمريض</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              نقدم رعاية صحية منزلية متميزة وموثوقة على يد طاقم طبي مؤهل ومدرب.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="w-10 h-10 bg-medical-teal rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4 text-primary">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  اتصل بنا
                </a>
              </li>
              <li>
                <button 
                  onClick={() => window.open('https://wa.me/201021541689', '_blank')}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  واتساب
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-4 text-primary">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span className="text-gray-300" dir="ltr">01158738644</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                <span className="text-gray-300" dir="ltr">01158738644</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 text-medical-teal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-gray-300">القاهرة، مصر</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">


            <div className="text-gray-400 text-center md:text-left">
              تم تطوير الموقع بواسطة{' '}
              <button 
                onClick={() => window.open('https://wa.me/201153903786', '_blank')}
                className="text-primary hover:text-primary-light transition-colors duration-300 font-semibold"
              >
                أدهم أحمد
              </button>
            </div>


            
            <div className="text-gray-400 text-center md:text-right">
              © {currentYear} الهشام لخدمات التمريض. جميع الحقوق محفوظة.
            </div>
            
{/*             <div className="text-gray-400 text-center md:text-left">
              تم تطوير الموقع بواسطة{' '}
              <button 
                onClick={() => window.open('https://wa.me/201153903786', '_blank')}
                className="text-primary hover:text-primary-light transition-colors duration-300 font-semibold"
              >
                أدهم أحمد
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
