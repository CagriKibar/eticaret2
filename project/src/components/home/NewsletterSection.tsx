import { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would make an API call to subscribe the user
    console.log('Subscribing email:', email);
    
    // Show success message
    setSubscribed(true);
    setEmail('');
    
    // Reset after 5 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail size={40} className="mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kampanyalardan Haberdar Olun</h2>
          <p className="text-lg mb-8 text-blue-100">
            En yeni ürünler, özel teklifler ve indirimlerden ilk siz haberdar olmak için bültenimize abone olun.
          </p>
          
          {subscribed ? (
            <div className="bg-green-500 text-white p-4 rounded-lg animate-fade-in">
              <p className="font-medium">Tebrikler! Bültenimize başarıyla abone oldunuz.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:items-center md:justify-center gap-3">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 flex-grow max-w-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Abone Ol
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;