import React from 'react';
import { Phone, MapPin, Clock, Bath, Scissors, Brush, Heart, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80"
            alt="Dog grooming background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Salon Psiej Urody Czyścioch
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            Profesjonalna pielęgnacja dla Twojego czworonożnego przyjaciela
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105"
          >
            Umów wizytę
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nasze Usługi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Bath className="w-12 h-12" />}
              title="Kąpiele Pielęgnacyjne"
              description="Profesjonalne kąpiele z użyciem wysokiej jakości kosmetyków, dostosowanych do typu sierści Twojego pupila."
            />
            <ServiceCard 
              icon={<Scissors className="w-12 h-12" />}
              title="Strzyżenie"
              description="Precyzyjne strzyżenie zgodne z wzorcami ras lub według indywidualnych preferencji właściciela."
            />
            <ServiceCard 
              icon={<Brush className="w-12 h-12" />}
              title="Rozczesywanie"
              description="Dokładne rozczesywanie i usuwanie kołtunów, pielęgnacja podszerstka dla zdrowej i lśniącej sierści."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Opinie Klientów</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              text="Najlepszy salon w okolicy! Mój York zawsze wychodzi stąd pięknie wystylizowany i zadowolony."
              author="Anna Kowalska"
              rating={5}
            />
            <TestimonialCard 
              text="Profesjonalna obsługa i indywidualne podejście do każdego psa. Polecam!"
              author="Marek Nowak"
              rating={5}
            />
            <TestimonialCard 
              text="Świetna atmosfera i troska o zwierzęta. Mój pies uwielbia tu przychodzić."
              author="Katarzyna Wiśniewska"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80" 
              alt="Dog grooming" 
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform"
            />
            <img 
              src="https://images.unsplash.com/photo-1589233160947-1c2f516e3c2c?auto=format&fit=crop&q=80" 
              alt="Dog washing" 
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform"
            />
            <img 
              src="https://images.unsplash.com/photo-1628009368231-7bb7cf0a6250?auto=format&fit=crop&q=80" 
              alt="Dog drying" 
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Kontakt</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 mb-4 text-pink-500" />
              <h3 className="text-xl font-semibold mb-2">Telefon</h3>
              <p>575 370 686</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 mb-4 text-pink-500" />
              <h3 className="text-xl font-semibold mb-2">Adres</h3>
              <p>Ul. 26-MARCA 68</p>
              <p>44-300 Wodzisław, Poland</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 mb-4 text-pink-500" />
              <h3 className="text-xl font-semibold mb-2">Godziny otwarcia</h3>
              <p>Pon-Pt: 9:00 - 17:00</p>
              <p>Sob: 9:00 - 14:00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-pink-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ text, author, rating }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 mb-4">{text}</p>
      <p className="font-semibold">{author}</p>
    </div>
  );
}

export default App;