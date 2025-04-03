import React from 'react';
import { Menu, Phone, Clock, MapPin, Facebook, Instagram, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Arczikebab</h1>
            <p className="text-xl md:text-2xl mb-8">Authentic Turkish Kebab in Warsaw</p>
            <a 
              href="#menu" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm">
            <Clock className="w-8 h-8 text-red-600" />
            <div>
              <h3 className="font-semibold">Opening Hours</h3>
              <p>Mon-Sun: 11:00 - 23:00</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm">
            <Phone className="w-8 h-8 text-red-600" />
            <div>
              <h3 className="font-semibold">Contact Us</h3>
              <p>+48 123 456 789</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm">
            <MapPin className="w-8 h-8 text-red-600" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p>ul. Example 123, Warsaw</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div id="menu" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <p className="text-red-600 font-bold">{item.price} zł</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-600"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="flex-1">
                <div className="h-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.35439805506!2d20.921111!3d52.233333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sus!4v1635959481000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '300px' }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Arczikebab</h3>
              <p>Authentic Turkish Kebab in Warsaw</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-red-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 Arczikebab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const menuItems = [
  {
    name: "Classic Döner Kebab",
    description: "Tender meat slices with fresh vegetables and special sauce",
    price: 22,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80"
  },
  {
    name: "Chicken Kebab",
    description: "Grilled chicken with mixed vegetables and garlic sauce",
    price: 20,
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80"
  },
  {
    name: "Vegetarian Falafel",
    description: "Crispy falafel with hummus and fresh salad",
    price: 18,
    image: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?auto=format&fit=crop&q=80"
  },
  {
    name: "Mixed Grill Plate",
    description: "Selection of grilled meats with rice and vegetables",
    price: 35,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80"
  },
  {
    name: "Lahmacun",
    description: "Turkish pizza with minced meat and vegetables",
    price: 19,
    image: "https://images.unsplash.com/photo-1632934607026-8fc9d2eb8ec5?auto=format&fit=crop&q=80"
  },
  {
    name: "Iskender Kebab",
    description: "Sliced döner on bread with tomato sauce and yogurt",
    price: 28,
    image: "https://images.unsplash.com/photo-1561626423-a51b45dc0e65?auto=format&fit=crop&q=80"
  }
];

export default App;