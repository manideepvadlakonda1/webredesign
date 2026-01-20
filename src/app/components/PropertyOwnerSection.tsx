import { Building2, Camera, Shield, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Verified Only',
    description: 'Every property is verified for safety and quality'
  },
  {
    icon: Camera,
    title: 'Free Photography',
    description: 'Professional photos at no extra cost'
  },
  {
    icon: Building2,
    title: 'Easy Management',
    description: 'Manage your listings with ease'
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Always here to help you succeed'
  }
];

export function PropertyOwnerSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-600 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Property Owner?
              <br />
              List with Us Today
            </h2>
            <p className="text-white/95 text-lg md:text-xl mb-8 leading-relaxed">
              Join thousands of property owners who trust HOMYZO. Get your property in front of qualified tenants quickly and easily.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-white hover:bg-gray-50 text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                List Your Property Free
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className="bg-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}