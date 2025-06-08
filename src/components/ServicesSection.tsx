
const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.01 2.01 0 0 0 18.06 7H16c-.8 0-1.54.37-2.01 1l-2.03 2.7L8.5 8.5C7.8 8.5 7 9.3 7 10s.8 1.5 1.5 1.5l2.5-1.5 2.5 3.5V18c0 1.1.9 2 2 2s2-.9 2-2z"/>
        </svg>
      ),
      title: "رعاية كبار السن",
      description: "رعاية شاملة لكبار السن مع متابعة الأدوية والعلامات الحيوية",
      color: "bg-primary"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      title: "رعاية ما بعد العمليات",
      description: "متابعة المرضى بعد العمليات الجراحية وتقديم الرعاية اللازمة",
      color: "bg-medical-teal"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "مراقبة العلامات الحيوية",
      description: "قياس ومراقبة ضغط الدم، السكر، النبض ودرجة الحرارة",
      color: "bg-green-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 8c-.55 0-1 .45-1 1v3h-2V9c0-.55-.45-1-1-1s-1 .45-1 1v3h-2V9c0-.55-.45-1-1-1s-1 .45-1 1v4.5l-2-1.5V9c0-.55-.45-1-1-1s-1 .45-1 1v7.07L7.5 15 6 16.5l3.5 3.5L12 22h7c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2h-1V9c0-.55-.45-1-1-1z"/>
        </svg>
      ),
      title: "العلاج الطبيعي",
      description: "جلسات علاج طبيعي متخصصة لتحسين الحركة والوظائف الجسدية",
      color: "bg-purple-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      ),
      title: "التشخيص المنزلي",
      description: "إجراء فحوصات أولية وتقييم صحي شامل في المنزل",
      color: "bg-orange-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7.17 8-12.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"/>
        </svg>
      ),
      title: "الاستشارات الطبية",
      description: "استشارات طبية متخصصة وإرشادات صحية للمرضى وأسرهم",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-medical-lightBlue to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-medical-darkGray mb-6 animate-fade-in">
            خدماتنا
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            نقدم مجموعة شاملة من الخدمات التمريضية المتخصصة لضمان حصولكم على أفضل رعاية صحية في راحة منازلكم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-8 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-medical-darkGray mb-4 text-center">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-center mb-6">
                {service.description}
              </p>

              <div className="text-center">
                <button className="text-primary font-semibold hover:text-primary-dark transition-colors duration-300 flex items-center justify-center mx-auto group-hover:gap-2 gap-1">
                  اعرف المزيد
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary rounded-2xl p-8 md:p-12 shadow-2xl animate-scale-in">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              هل تحتاج إلى استشارة طبية؟
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-6 max-w-2xl mx-auto">
              فريقنا من الأطباء والممرضين المؤهلين جاهز لتقديم أفضل رعاية صحية لكم
            </p>
            <button 
              onClick={() => window.open('https://wa.me/201158738644', '_blank')}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              احجز موعدك الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
