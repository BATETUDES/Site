import React from 'react';
import { Users, Building2 } from 'lucide-react';

export function Expertise() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" 
              alt="Expertise" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Expertise</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Une équipe expérimentée</h3>
                  <p className="text-gray-600">Plus de 15 ans d'expérience dans l'économie de la construction.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Building2 className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Projets variés</h3>
                  <p className="text-gray-600">Du résidentiel aux bâtiments industriels, en passant par le tertiaire.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}