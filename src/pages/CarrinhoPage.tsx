import { Trash2, ShoppingBag, Tag } from 'lucide-react';
import { useState } from 'react';
import { Produto } from '../types';

interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}

interface CarrinhoPageProps {
  itens: ItemCarrinho[];
  onRemoveItem: (produtoId: string) => void;
  onUpdateQuantity: (produtoId: string, quantidade: number) => void;
  onNavigate: (page: string) => void;
}

const CUPONS_VALIDOS = {
  'BEMVINDO10': { desconto: 10, tipo: 'percentual' as const },
  'MINASGERAIS': { desconto: 15, tipo: 'percentual' as const },
  'PRIMEIRACOMPRA': { desconto: 20, tipo: 'fixo' as const }
};

export default function CarrinhoPage({
  itens,
  onRemoveItem,
  onUpdateQuantity,
  onNavigate
}: CarrinhoPageProps) {
  const [cupom, setCupom] = useState('');
  const [cupomAplicado, setCupomAplicado] = useState<string | null>(null);
  const [erroCupom, setErroCupom] = useState('');

  const subtotal = itens.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0);

  let desconto = 0;
  if (cupomAplicado && CUPONS_VALIDOS[cupomAplicado as keyof typeof CUPONS_VALIDOS]) {
    const cupomInfo = CUPONS_VALIDOS[cupomAplicado as keyof typeof CUPONS_VALIDOS];
    if (cupomInfo.tipo === 'percentual') {
      desconto = (subtotal * cupomInfo.desconto) / 100;
    } else {
      desconto = cupomInfo.desconto;
    }
  }

  const total = subtotal - desconto;

  const aplicarCupom = () => {
    const cupomUpper = cupom.toUpperCase();
    if (CUPONS_VALIDOS[cupomUpper as keyof typeof CUPONS_VALIDOS]) {
      setCupomAplicado(cupomUpper);
      setErroCupom('');
    } else {
      setErroCupom('Cupom inválido');
      setCupomAplicado(null);
    }
  };

  const removerCupom = () => {
    setCupomAplicado(null);
    setCupom('');
    setErroCupom('');
  };

  if (itens.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="mb-8">
              <ShoppingBag className="w-32 h-32 mx-auto text-gray-300" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Seu carrinho está vazio
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore nossos produtos artesanais e adicione seus favoritos ao carrinho
            </p>
            <button
              onClick={() => onNavigate('categorias')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Explorar Produtos
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Seu Carrinho</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {itens.map(item => (
              <div
                key={item.produto.id}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row gap-6"
              >
                <img
                  src={item.produto.imagem}
                  alt={item.produto.nome}
                  className="w-full sm:w-32 h-32 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.produto.nome}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.produto.descricao}
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => onUpdateQuantity(item.produto.id, Math.max(1, item.quantidade - 1))}
                        className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold transition-colors"
                      >
                        -
                      </button>
                      <span className="w-12 text-center font-semibold">{item.quantidade}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.produto.id, item.quantidade + 1)}
                        className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
                      <p className="text-2xl font-bold text-green-600">
                        R$ {(item.produto.preco * item.quantidade).toFixed(2)}
                      </p>
                      <button
                        onClick={() => onRemoveItem(item.produto.id)}
                        className="text-red-600 hover:text-red-800 transition-colors p-2"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Cupom de Desconto
              </h2>

              {!cupomAplicado ? (
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={cupom}
                      onChange={(e) => {
                        setCupom(e.target.value);
                        setErroCupom('');
                      }}
                      placeholder="Digite o cupom"
                      className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-amber-500"
                    />
                    <button
                      onClick={aplicarCupom}
                      className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Aplicar
                    </button>
                  </div>
                  {erroCupom && (
                    <p className="text-red-600 text-sm">{erroCupom}</p>
                  )}
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>Cupons disponíveis:</p>
                    <p className="font-mono">BEMVINDO10 - 10% de desconto</p>
                    <p className="font-mono">MINASGERAIS - 15% de desconto</p>
                    <p className="font-mono">PRIMEIRACOMPRA - R$ 20 de desconto</p>
                  </div>
                </div>
              ) : (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Tag className="w-5 h-5 text-green-600" />
                      <span className="font-bold text-green-700">{cupomAplicado}</span>
                    </div>
                    <button
                      onClick={removerCupom}
                      className="text-green-700 hover:text-green-900 text-sm underline"
                    >
                      Remover
                    </button>
                  </div>
                  <p className="text-sm text-green-600">
                    Cupom aplicado com sucesso!
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Resumo do Pedido
              </h2>

              <div className="space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>

                {desconto > 0 && (
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>Desconto</span>
                    <span>- R$ {desconto.toFixed(2)}</span>
                  </div>
                )}

                <div className="border-t-2 border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between text-xl font-bold text-gray-900">
                    <span>Total</span>
                    <span className="text-green-600">R$ {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg transition-colors text-lg mt-6">
                Finalizar Compra
              </button>

              <p className="text-xs text-gray-500 text-center">
                Sistema de pagamento em breve
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
