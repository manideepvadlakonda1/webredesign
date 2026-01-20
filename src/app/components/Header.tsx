import { Menu, X, User } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-xl font-bold text-gray-900">HOMYZO</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors font-medium">Properties</a>
            <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors font-medium">About</a>
            <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors font-medium">Our Team</a>
            <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors font-medium">Contact</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden md:block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-sm">
              List Property
            </button>
            <button className="p-2.5 hover:bg-gray-100 rounded-lg transition-colors">
              <User className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              className="md:hidden p-2.5 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-1">
              <a href="#" className="text-gray-600 hover:text-cyan-600 hover:bg-gray-50 transition-colors py-3 px-4 rounded-lg font-medium">Properties</a>
              <a href="#" className="text-gray-600 hover:text-cyan-600 hover:bg-gray-50 transition-colors py-3 px-4 rounded-lg font-medium">About</a>
              <a href="#" className="text-gray-600 hover:text-cyan-600 hover:bg-gray-50 transition-colors py-3 px-4 rounded-lg font-medium">Our Team</a>
              <a href="#" className="text-gray-600 hover:text-cyan-600 hover:bg-gray-50 transition-colors py-3 px-4 rounded-lg font-medium">Contact</a>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-colors mt-2">
                List Property
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}