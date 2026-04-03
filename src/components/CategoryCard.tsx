import { CategoriaInfo } from '../types';

interface CategoryCardProps {
  categoria: CategoriaInfo;
  onClick: (categoriaId: string) => void;
}

export default function CategoryCard({ categoria, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={() => onClick(categoria.id)}
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-64"
    >
      <img
        src={categoria.imagem}
        alt={categoria.nome}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{categoria.nome}</h3>
        <p className="text-sm text-gray-200 leading-relaxed">{categoria.descricao}</p>
      </div>
      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/30 transition-colors">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}
