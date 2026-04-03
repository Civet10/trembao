import { Instagram } from 'lucide-react';
import { produtores } from '../data/produtores';
import { produtos } from '../data/produtos';
import { Produto } from '../types';

interface ProdutoresPageProps {
  onProductClick: (produto: Produto) => void;
}

export default function ProdutoresPage({ onProductClick }: ProdutoresPageProps) {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Nossos Produtores
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça as famílias e histórias por trás de cada produto.
            São pessoas dedicadas que mantêm viva a tradição mineira.
          </p>
        </div>

        <div className="space-y-12">
          {produtores.map((produtor) => {
            const produtosDoProduto = produtos.filter(p => p.produtorId === produtor.id);

            return (
              <div
                key={produtor.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  <div className="space-y-6">
                    <img
                      src={produtor.foto}
                      alt={produtor.nome}
                      className="w-full h-64 lg:h-full object-cover rounded-xl"
                    />
                    <div className="text-center lg:text-left">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {produtor.nome}
                      </h2>
                      <p className="text-amber-600 font-medium mb-4">{produtor.tipo}</p>
                      <a
                        href={`https://instagram.com/${produtor.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-amber-700 hover:text-amber-900 transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                        <span className="font-medium">{produtor.instagram}</span>
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Nossa História</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {produtor.historia}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Nossos Produtos</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {produtosDoProduto.map(produto => (
                          <button
                            key={produto.id}
                            onClick={() => onProductClick(produto)}
                            className="flex items-center space-x-4 bg-amber-50 hover:bg-amber-100 p-4 rounded-lg transition-colors text-left group"
                          >
                            <img
                              src={produto.imagem}
                              alt={produto.nome}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">
                                {produto.nome}
                              </h4>
                              <p className="text-green-600 font-bold">
                                R$ {produto.preco.toFixed(2)}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
