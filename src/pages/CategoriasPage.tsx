import { categorias } from '../data/categorias';
import CategoryCard from '../components/CategoryCard';

interface CategoriasPageProps {
  onNavigate: (page: string, categoryId?: string) => void;
}

export default function CategoriasPage({ onNavigate }: CategoriasPageProps) {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Categorias de Produtos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore nossa variedade de produtos artesanais mineiros, organizados por categoria
            para facilitar sua busca pelo sabor autêntico de Minas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map(categoria => (
            <CategoryCard
              key={categoria.id}
              categoria={categoria}
              onClick={(catId) => onNavigate('produtos', catId)}
            />
          ))}
        </div>

        <div className="mt-16 bg-amber-100 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            Não encontrou o que procura?
          </h2>
          <p className="text-lg text-amber-800 mb-6">
            Entre em contato conosco e ajudaremos você a encontrar o produto perfeito
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Fale Conosco
          </button>
        </div>
      </div>
    </div>
  );
}
