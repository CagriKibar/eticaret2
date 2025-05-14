import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hakkımızda</h3>
            <p className="text-blue-100 mb-4">
              KTR Store, en kaliteli ürünleri uygun fiyatlarla sunan, müşteri memnuniyetini ön planda tutan modern bir e-ticaret sitesidir.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Kategoriler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/kategori/erkek" className="text-blue-100 hover:text-white transition-colors">
                  Erkek Giyim
                </Link>
              </li>
              <li>
                <Link to="/kategori/kadin" className="text-blue-100 hover:text-white transition-colors">
                  Kadın Giyim
                </Link>
              </li>
              <li>
                <Link to="/kategori/elektronik" className="text-blue-100 hover:text-white transition-colors">
                  Elektronik
                </Link>
              </li>
              <li>
                <Link to="/kategori/ayakkabi" className="text-blue-100 hover:text-white transition-colors">
                  Ayakkabı
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Müşteri Hizmetleri</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/yardim/faq" className="text-blue-100 hover:text-white transition-colors">
                  Sık Sorulan Sorular
                </Link>
              </li>
              <li>
                <Link to="/yardim/iade" className="text-blue-100 hover:text-white transition-colors">
                  İade Politikası
                </Link>
              </li>
              <li>
                <Link to="/yardim/kargo" className="text-blue-100 hover:text-white transition-colors">
                  Kargo Bilgileri
                </Link>
              </li>
              <li>
                <Link to="/yardim/odeme" className="text-blue-100 hover:text-white transition-colors">
                  Ödeme Seçenekleri
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-blue-100">
                  Atatürk Cad. No:123, Mecidiyeköy, İstanbul
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+902121234567" className="text-blue-100 hover:text-white transition-colors">
                  +90 (212) 123 45 67
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@ktrstore.com" className="text-blue-100 hover:text-white transition-colors">
                  info@ktrstore.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-blue-400 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} KTR Store. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-4">
              <Link to="/gizlilik" className="text-blue-100 hover:text-white transition-colors">
                Gizlilik Politikası
              </Link>
              <Link to="/kullanim-sartlari" className="text-blue-100 hover:text-white transition-colors">
                Kullanım Şartları
              </Link>
              <Link to="/kvkk" className="text-blue-100 hover:text-white transition-colors">
                KVKK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;