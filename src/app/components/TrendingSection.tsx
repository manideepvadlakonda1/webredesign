import { Heart, MapPin, Star, Bed, Bath, Square } from 'lucide-react';
import { useState } from 'react';

const properties = [
  {
    id: 1,
    title: 'Modern Downtown Apartment',
    location: 'Central Park, New York',
    price: '$2,450',
    rating: 4.8,
    reviews: 124,
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: 'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4ODMwMzM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Apartment'
  },
  {
    id: 2,
    title: 'Luxury Penthouse Suite',
    location: 'Downtown, Los Angeles',
    price: '$4,800',
    rating: 4.9,
    reviews: 89,
    beds: 3,
    baths: 3,
    sqft: 2200,
    image: 'https://images.unsplash.com/photo-1738168279272-c08d6dd22002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2ODkwNzcxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Penthouse'
  },
  {
    id: 3,
    title: 'Cozy Studio Living',
    location: 'Marina Bay, San Francisco',
    price: '$1,850',
    rating: 4.7,
    reviews: 156,
    beds: 1,
    baths: 1,
    sqft: 650,
    image: 'https://images.unsplash.com/photo-1633286382418-4181cb81a6d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2ODg5MjI0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Studio'
  },
  {
    id: 4,
    title: 'Spacious Family Home',
    location: 'Manhattan, New York',
    price: '$5,200',
    rating: 5.0,
    reviews: 203,
    beds: 4,
    baths: 3,
    sqft: 2800,
    image: 'https://images.unsplash.com/photo-1543709525-e8764409abff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4ODUwNTAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'House'
  }
];

export function TrendingSection() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked properties that match your preferences
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Type Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white/95 backdrop-blur-sm text-cyan-600 px-3 py-1 rounded-lg text-xs font-semibold">
                    {property.type}
                  </span>
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-3 right-3 p-2 bg-white/95 backdrop-blur-sm rounded-lg hover:bg-white transition-all"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      favorites.includes(property.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-700'
                    }`}
                  />
                </button>

                {/* Rating Badge */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-gray-900">{property.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1">
                  {property.title}
                </h3>
                <div className="flex items-center gap-1.5 text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm line-clamp-1">{property.location}</span>
                </div>

                {/* Property Details */}
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <Bed className="w-4 h-4" />
                    <span className="text-sm">{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <Bath className="w-4 h-4" />
                    <span className="text-sm">{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <Square className="w-4 h-4" />
                    <span className="text-sm">{property.sqft} sqft</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">{property.price}</span>
                    <span className="text-sm text-gray-500">/mo</span>
                  </div>
                  <button className="bg-cyan-50 hover:bg-cyan-500 text-cyan-600 hover:text-white px-4 py-2 rounded-lg font-medium transition-all text-sm">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}