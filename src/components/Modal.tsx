import { X, Instagram } from 'lucide-react';
import { useEffect } from 'react';
import { Produto } from '../types';
import { produtores } from '../data/produtores';

interface ModalProps {
  produto: Produto;
  onClose: () => void;
  onAddToCart: (produto: Produto) => void;
}

export default function Modal({ produto, onClose, onAddToCart }: ModalProps) {
  const produtor = produtores.find(p => p.id === produto.produtorId);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="relative rounded-xl overflow-hidden bg-gray-100">
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-full h-96 object-cover"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {produto.nome}
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {produto.descricao}
                </p>

                <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-6">
                  <p className="text-3xl font-bold text-green-700">
                    R$ {produto.preco.toFixed(2)}
                  </p>
                  <p className="text-sm text-green-600 mt-1">
                    à vista ou parcelado
                  </p>
                </div>

                {produtor && (
                  <div className="bg-amber-50 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-amber-900 mb-2">
                      Produtor
                    </h3>
                    <div className="flex items-center space-x-3">
                      <img
                        src={produtor.foto}
                        alt={produtor.nome}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-amber-900">{produtor.nome}</p>
                        <p className="text-sm text-amber-700">{produtor.tipo}</p>
                      </div>
                    </div>
                    <a
                      href={`https://instagram.com/${produtor.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-amber-700 hover:text-amber-900 mt-3 text-sm"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>{produtor.instagram}</span>
                    </a>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    onAddToCart(produto);
                    onClose();
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg transition-colors text-lg"
                >
                  Adicionar ao Carrinho
                </button>
                <button
                  onClick={onClose}
                  className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-4 rounded-lg transition-colors"
                >
                  Continuar Comprando
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
