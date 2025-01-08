import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-24" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="container mx-auto px-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 md:p-12 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Expert en économie de la construction
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Votre partenaire de confiance à Toulon pour l'optimisation des coûts et la maîtrise budgétaire de vos projets de construction.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Nous contacter
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}