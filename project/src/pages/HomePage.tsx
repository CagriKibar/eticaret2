import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedCategories from '../components/home/FeaturedCategories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import PromoSection from '../components/home/PromoSection';
import NewsletterSection from '../components/home/NewsletterSection';

const HomePage = () => {
  // Update page title
  useEffect(() => {
    document.title = 'KTR Store - Modern Alışveriş Deneyimi';
  }, []);

  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <PromoSection />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;