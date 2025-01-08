import React from 'react';
import { Building2 } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">BAT ETUDES</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-blue-600">Accueil</Link>
              <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
              <Link to="/expertise" className="text-gray-600 hover:text-blue-600">Expertise</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Building2 className="h-6 w-6" />
              <span className="text-lg font-bold">BAT ETUDES</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 BAT ETUDES. Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}