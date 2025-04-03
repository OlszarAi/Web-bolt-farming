import React from 'react';
import { Menu, Phone, Clock, MapPin, Facebook, Instagram, Mail, Wifi, ShoppingBag, PartyPopper, Car, Umbrella, Accessibility, AirVent, Baby, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80")',
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Arczikebab
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Authentic Turkish Kebab in Warsaw
            </motion.p>
            <motion.a 
              href="#menu" 
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Menu
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Menu Section - Moved to top */}
      <motion.div 
        id="menu" 
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800"
            variants={fadeIn}
          >
            Our Menu
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {menuItems.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
              >
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <p className="text-red-600 font-bold text-lg">{item.price} zł</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Reservation Section */}
      <motion.div 
        className="py-16 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800"
            variants={fadeIn}
          >
            Make your reservation
          </motion.h2>
          <motion.div 
            className="max-w-md mx-auto text-center"
            variants={fadeIn}
          >
            <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
              <a href="tel:519764089" className="text-4xl font-bold text-red-600 hover:text-red-700 transition-colors">
                519 764 089
              </a>
            </div>
            <p className="text-gray-600 text-lg">Call us to make a reservation</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Combined Services and Opening Hours Section */}
      <motion.div 
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Services Section */}
            <div>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800"
                variants={fadeIn}
              >
                Our Services
              </motion.h2>
              <motion.div 
                className="grid grid-cols-2 gap-6"
                variants={staggerContainer}
              >
                {[
                  { icon: Accessibility, label: "Accessible" },
                  { icon: AirVent, label: "Air Conditioning" },
                  { icon: Baby, label: "Kid's Corner" },
                  { icon: Umbrella, label: "Outside Seating" },
                  { icon: Car, label: "Self Parking" },
                  { icon: PartyPopper, label: "Private Events" },
                  { icon: ShoppingBag, label: "Takeaway" },
                  { icon: Wifi, label: "Free WiFi" }
                ].map((service, index) => (
                  <motion.div 
                    key={index}
                    className="flex flex-col items-center text-center group"
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300">
                      {React.createElement(service.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <h3 className="font-semibold">{service.label}</h3>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Opening Hours Section */}
            <div>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800"
                variants={fadeIn}
              >
                Opening Hours
              </motion.h2>
              <motion.div 
                className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
                variants={fadeIn}
              >
                <div className="p-6 space-y-4">
                  {[
                    { day: "Monday", hours: "11:00 AM - 11:00 PM" },
                    { day: "Tuesday", hours: "11:00 AM - 11:00 PM" },
                    { day: "Wednesday", hours: "11:00 AM - 11:00 PM" },
                    { day: "Thursday", hours: "11:00 AM - 11:00 PM" },
                    { day: "Friday", hours: "11:00 AM - 02:00 AM" },
                    { day: "Saturday", hours: "11:00 AM - 02:00 AM" },
                    { day: "Sunday", hours: "11:00 AM - 12:00 AM" }
                  ].map((schedule, index) => (
                    <motion.div 
                      key={index}
                      className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      variants={{
                        initial: { opacity: 0, x: -20 },
                        animate: { opacity: 1, x: 0 }
                      }}
                    >
                      <span className="font-semibold text-gray-800">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Everything at a glance Section */}
      <motion.div 
        id="contact" 
        className="py-16 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800"
            variants={fadeIn}
          >
            Everything at a glance
          </motion.h2>
          <motion.div 
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                icon: MapPin,
                title: "Find us",
                content: (
                  <>
                    <p>Gen Bema 2</p>
                    <p>44-280 Rydułtowy</p>
                    <p>Poland</p>
                  </>
                )
              },
              {
                icon: Mail,
                title: "E-mail us",
                content: (
                  <a href="mailto:arturpaprotny@op.pl" className="text-red-600 hover:text-red-700">
                    arturpaprotny@op.pl
                  </a>
                )
              },
              {
                icon: Phone,
                title: "Call us",
                content: (
                  <a href="tel:+48519764089" className="text-red-600 hover:text-red-700">
                    +48519764089
                  </a>
                )
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
              >
                {React.createElement(item.icon, { className: "w-8 h-8 mx-auto mb-4 text-red-600" })}
                <h3 className="font-bold mb-2 text-xl">{item.title}</h3>
                {item.content}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                Arczikebab
              </h3>
              <p>Authentic Turkish Kebab in Warsaw</p>
            </div>
            <div className="flex space-x-6">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Mail, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="hover:text-red-500 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {React.createElement(social.icon, { className: "w-6 h-6" })}
                </motion.a>
              ))}
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