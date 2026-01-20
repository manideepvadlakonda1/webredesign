import { Wifi, Wind, Shirt, UtensilsCrossed, Droplet, Users } from 'lucide-react';

const lifestyleCategories = [
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Blazing fast internet',
    color: 'bg-cyan-50',
    iconColor: 'text-cyan-500'
  },
  {
    icon: Wind,
    title: 'Air Conditioning',
    description: 'Climate controlled',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500'
  },
  {
    icon: Shirt,
    title: 'Laundry',
    description: 'On-site facilities',
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-500'
  },
  {
    icon: UtensilsCrossed,
    title: 'Meals Included',
    description: 'Daily fresh meals',
    color: 'bg-orange-50',
    iconColor: 'text-orange-500'
  },
  {
    icon: Droplet,
    title: 'Hot Water',
    description: '24/7 availability',
    color: 'bg-teal-50',
    iconColor: 'text-teal-500'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Vibrant social life',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500'
  }
];

export function LifestyleSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Amenities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need for comfortable living, all in one place
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {lifestyleCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-cyan-200"
              >
                <div className={`${category.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${category.iconColor}`} />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  {category.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}