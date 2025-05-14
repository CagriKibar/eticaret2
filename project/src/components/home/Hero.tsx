import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Yaz Koleksiyonu',
    subtitle: 'Yeni sezon ürünlerde %25 indirim',
    link: '/kategori/kadin',
    cta: 'Hemen İncele'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Elektronik Fırsatları',
    subtitle: 'Akıllı telefonlarda büyük indirimler',
    link: '/kategori/elektronik',
    cta: 'Fırsatları Kaçırma'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Erkek Giyim',
    subtitle: 'Takım elbiseden spor giyime şık seçenekler',
    link: '/kategori/erkek',
    cta: 'Alışverişe Başla'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<number | null>(null);

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startSlideTimer();
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    startSlideTimer();
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startSlideTimer();
  };

  return (
    <div className="relative h-[70vh] md:h-[85vh] overflow-hidden hero-shadow">
      {/* Slides */}
      <div className="h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            </div>
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-lg ml-4 md:ml-16 text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 transform translate-y-8 opacity-0 animate-[fadeInUp_1s_0.3s_forwards]">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 transform translate-y-8 opacity-0 animate-[fadeInUp_1s_0.5s_forwards]">
                    {slide.subtitle}
                  </p>
                  <Link 
                    to={slide.link}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform translate-y-8 opacity-0 animate-[fadeInUp_1s_0.7s_forwards]"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-all"
        onClick={goToPrevSlide}
      >
        <ArrowLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-all"
        onClick={goToNextSlide}
      >
        <ArrowRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;