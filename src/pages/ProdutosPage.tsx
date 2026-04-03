import { useState } from 'react';
import { produtos } from '../data/produtos';
import { categorias } from '../data/categorias';
import { Produto } from '../types';
import ProductCard from '../components/ProductCard';
import { ArrowLeft } from 'lucide-react';

interface ProdutosPageProps {
  categoriaId?: string;
  onProductClick: (produto: Produto) => void;
  onNavigate: (page: string) => void;
}

export default function ProdutosPage({ categoriaId, onProductClick, onNavigate }: ProdutosPageProps) {
  const [ordenacao, setOrdenacao] = useState<'nome' | 'preco-asc' | 'preco-desc'>('nome');

  const categoria = categorias.find(c => c.id === categoriaId);
  const produtosFiltrados = categoriaId
    ? produtos.filter(p => p.categoria === categoriaId)
    : produtos;

  const produtosOrdenados = [...produtosFiltrados].sort((a, b) => {
    if (ordenacao === 'nome') {
      return a.nome.localeCompare(b.nome);
    } else if (ordenacao === 'preco-asc') {
      return a.preco - b.preco;
    } else {
      return b.preco - a.preco;
    }
  });

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <button
          onClick={() => onNavigate('categorias')}
          className="flex items-center space-x-2 text-amber-700 hover:text-amber-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Voltar para Categorias</span>
        </button>

        <div className="mb-12">
          {categoria ? (
            <>
              <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
                <img
                  src={categoria.imagem}
                  alt={categoria.nome}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h1 className="text-5xl font-bold mb-3">{categoria.nome}</h1>
                  <p className="text-xl text-gray-200">{categoria.descricao}</p>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Todos os Produtos
              </h1>
              <p className="text-xl text-gray-600">
                Explore nossa seleção completa de produtos artesanais
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">{produtosOrdenados.length}</span> produtos encontrados
          </p>

          <div className="flex items-center space-x-3">
            <label className="text-gray-700 font-medium">Ordenar por:</label>
            <select
              value={ordenacao}
              onChange={(e) => setOrdenacao(e.target.value as any)}
              className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-amber-500"
            >
              <option value="nome">Nome</option>
              <option value="preco-asc">Menor Preço</option>
              <option value="preco-desc">Maior Preço</option>
            </select>
          </div>
        </div>

        {produtosOrdenados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {produtosOrdenados.map(produto => (
              <ProductCard
                key={produto.id}
                produto={produto}
                onClick={onProductClick}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-4">
              <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Nenhum produto encontrado</h3>
            <p className="text-gray-600 mb-6">Não encontramos produtos nesta categoria no momento</p>
            <button
              onClick={() => onNavigate('categorias')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Ver Outras Categorias
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
