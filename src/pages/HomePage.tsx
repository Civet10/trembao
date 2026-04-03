import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { produtos } from '../data/produtos';
import { categorias } from '../data/categorias';
import { Produto } from '../types';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';

interface HomePageProps {
  onProductClick: (produto: Produto) => void;
  onNavigate: (page: string, categoryId?: string) => void;
}

export default function HomePage({ onProductClick, onNavigate }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const destaques = produtos.filter(p => p.destaque);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destaques.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [destaques.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destaques.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + destaques.length) % destaques.length);
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-screen bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          {destaques.map((produto, index) => (
            <div
              key={produto.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            </div>
          ))}
        </div>

        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Sabor Autêntico de <span className="text-amber-400">Minas Gerais</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Produtos artesanais da agricultura familiar, feitos com tradição e amor pela terra mineira
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('categorias')}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Explorar Produtos</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('produtores')}
                className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Conheça os Produtores
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-colors"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-colors"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {destaques.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-amber-400 w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Agricultura Familiar Mineira
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cada produto que você encontra aqui carrega histórias de famílias dedicadas,
              receitas tradicionais e o orgulho de produzir com qualidade e autenticidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Qualidade Garantida</h3>
              <p className="text-gray-600">Produtos selecionados e certificados, direto do produtor</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Natural</h3>
              <p className="text-gray-600">Sem conservantes artificiais, apenas ingredientes naturais</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tradição Mineira</h3>
              <p className="text-gray-600">Receitas passadas de geração em geração</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Produtos em Destaque</h2>
            <p className="text-lg text-gray-600">Os mais queridos pelos nossos clientes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {produtos.slice(0, 8).map(produto => (
              <ProductCard
                key={produto.id}
                produto={produto}
                onClick={onProductClick}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore por Categoria</h2>
            <p className="text-lg text-gray-600">Descubra o melhor de Minas em cada categoria</p>
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
        </div>
      </section>
    </div>
  );
}
