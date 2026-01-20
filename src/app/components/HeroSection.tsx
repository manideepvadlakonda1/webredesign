import { Search, MapPin, Home, Building2 } from 'lucide-react';
import { useState } from 'react';

export function HeroSection() {
  const [searchType, setSearchType] = useState<'rent' | 'buy'>('rent');
  const [propertyType, setPropertyType] = useState<string>('apartment');
  const [location, setLocation] = useState<string>('');

  const handleSearch = () => {
    console.log('Searching...', { searchType, propertyType, location });
  };

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1627141234469-24711efb373c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2ODkwNTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Modern luxury home" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Find Your Perfect
            <br />
            <span className="text-cyan-400">Dream Home</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl">
            Discover thousands of properties for rent and sale. Your next home is just a search away.
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-xl p-6 shadow-2xl max-w-4xl">
            {/* Search Type Tabs */}
            <div className="flex gap-3 mb-6">
              <button 
                onClick={() => setSearchType('rent')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  searchType === 'rent' 
                    ? 'bg-cyan-500 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Building2 className="w-5 h-5" />
                <span>Rent</span>
              </button>
              <button 
                onClick={() => setSearchType('buy')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  searchType === 'buy' 
                    ? 'bg-cyan-500 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Home className="w-5 h-5" />
                <span>Buy</span>
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              {/* Location Input */}
              <div className="flex-1 flex items-center gap-3 px-4 py-3.5 bg-gray-50 rounded-lg border border-gray-200 focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-200 transition-all">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <input 
                  type="text" 
                  placeholder="Enter location or zip code"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Property Type Select */}
              <div className="flex-1 flex items-center gap-3 px-4 py-3.5 bg-gray-50 rounded-lg border border-gray-200 focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-200 transition-all">
                <Home className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <select 
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-gray-700"
                >
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="studio">Studio</option>
                  <option value="condo">Condo</option>
                </select>
              </div>

              {/* Search Button */}
              <button 
                onClick={handleSearch}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
              >
                <Search className="w-5 h-5" />
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}