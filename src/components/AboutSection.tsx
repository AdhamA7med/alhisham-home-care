
import { useEffect, useState } from "react";

const AboutSection = () => {
  const [counters, setCounters] = useState({
    patients: 0,
    experience: 0,
    satisfaction: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const targets = { patients: 500, experience: 8, satisfaction: 98 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        patients: Math.floor(targets.patients * progress),
        experience: Math.floor(targets.experience * progress),
        satisfaction: Math.floor(targets.satisfaction * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepTime);
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-medical-lightBlue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-medical-darkGray mb-6 animate-fade-in">
            من نحن
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-medical-darkGray mb-6">
              نحن في جولدن كير لخدمات التمريض
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              نقدم رعاية صحية منزلية عالية الجودة على يد طاقم طبي مؤهل، مع التزام تام براحة وسلامة المرضى. 
              نؤمن بأن الرعاية الصحية يجب أن تكون في متناول الجميع وفي بيئة مريحة ومألوفة.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-primary">الثقة</h4>
                <p className="text-sm text-gray-600">طاقم موثوق ومؤهل</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-medical-teal rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-medical-teal">الخبرة</h4>
                <p className="text-sm text-gray-600">سنوات من التميز</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-green-500">الرحمة</h4>
                <p className="text-sm text-gray-600">رعاية بمحبة واهتمام</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              فريقنا المتخصص يضم ممرضين وممرضات معتمدين مع سنوات من الخبرة في المجال الطبي، 
              نقدم خدماتنا بأعلى معايير الجودة والمهنية.
            </p>
          </div>

          {/* Stats */}
          <div className="animate-slide-in-right">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-center text-medical-darkGray mb-8">
                إنجازاتنا بالأرقام
              </h3>
              
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-counter">
                    {counters.patients}+
                  </div>
                  <p className="text-gray-600 font-semibold">مريض تم خدمته</p>
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
                    <div className="bg-primary h-2 rounded-full transition-all duration-2000" style={{width: isVisible ? '100%' : '0%'}}></div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-medical-teal mb-2 animate-counter">
                    {counters.experience}+
                  </div>
                  <p className="text-gray-600 font-semibold">سنوات خبرة</p>
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
                    <div className="bg-medical-teal h-2 rounded-full transition-all duration-2000" style={{width: isVisible ? '85%' : '0%'}}></div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2 animate-counter">
                    {counters.satisfaction}%
                  </div>
                  <p className="text-gray-600 font-semibold">رضا العملاء</p>
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
                    <div className="bg-green-500 h-2 rounded-full transition-all duration-2000" style={{width: isVisible ? '98%' : '0%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
