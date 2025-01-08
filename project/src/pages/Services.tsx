import React from 'react';
import { Calculator, Ruler, LineChart } from 'lucide-react';

export function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nos Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Calculator className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Estimation des coûts</h3>
            <p className="text-gray-600">Analyse détaillée et estimation précise des coûts de construction pour vos projets.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Ruler className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Métrés et quantitatifs</h3>
            <p className="text-gray-600">Relevés précis et établissement des quantitatifs pour une budgétisation optimale.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <LineChart className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Suivi financier</h3>
            <p className="text-gray-600">Contrôle et suivi des dépenses tout au long de votre projet de construction.</p>
          </div>
        </div>
      </div>
    </section>
  );
}