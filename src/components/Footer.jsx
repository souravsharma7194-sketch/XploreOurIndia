
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 border-t-2 border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">India Tours</h3>
            <p className="text-gray-700 text-sm mb-4">
              Experience the incredible beauty and rich culture of India with our expertly curated tour packages.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-orange-500 hover:bg-orange-600 p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-orange-500 hover:bg-orange-600 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-orange-500 hover:bg-orange-600 p-2 rounded-full transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-orange-500 hover:bg-orange-600 p-2 rounded-full transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors text-sm">Home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors text-sm">Tour Packages</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors text-sm">Destinations</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors text-sm">Gallery</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors text-sm">Rajasthan</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors text-sm">Kerala</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors text-sm">Goa</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors text-sm">Kashmir</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors text-sm">Himachal Pradesh</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors text-sm">Golden Triangle</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">Delhi, India</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <p className="text-gray-700 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <p className="text-gray-700 text-sm">info@indiatours.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-orange-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-700 text-sm text-center md:text-left">
              © 2025 India Tours. All rights reserved.
            </p>
            <p className="text-gray-700 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in India
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}