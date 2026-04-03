import { Eye } from 'lucide-react';
import { Produto } from '../types';

interface ProductCardProps {
  produto: Produto;
  onClick: (produto: Produto) => void;
}

export default function ProductCard({ produto, onClick }: ProductCardProps) {
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
      onClick={() => onClick(produto)}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center space-x-2">
              <Eye className="w-5 h-5 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Ver Detalhes</span>
            </div>
          </div>
        </div>
        {produto.destaque && (
          <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            DESTAQUE
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
          {produto.nome}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {produto.descricao}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-green-600">
              R$ {produto.preco.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500">à vista</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick(produto);
            }}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Ver
          </button>
        </div>
      </div>
    </div>
  );
}
