import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartCount: number;
}

export default function Header({ currentPage, onNavigate, cartCount }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Início' },
    { id: 'categorias', label: 'Categorias' },
    { id: 'produtores', label: 'Produtores' },
    { id: 'sobre', label: 'Sobre' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-amber-900/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 group"
          >
            <div className="bg-amber-700 p-2 rounded-lg group-hover:bg-amber-600 transition-colors">
              <svg className="w-8 h-8 text-amber-100" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 4v8.82c0 4.52-3.13 8.74-8 9.92-4.87-1.18-8-5.4-8-9.92V8.18l8-4z"/>
              </svg>
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-amber-100 tracking-tight">trembaomg</h1>
              <p className="text-xs text-amber-200 -mt-1">Sabor de Minas</p>
            </div>
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-lg font-medium transition-colors relative pb-1 ${
                  currentPage === item.id
                    ? 'text-amber-100'
                    : 'text-amber-200 hover:text-amber-100'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400"></span>
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate('carrinho')}
              className="relative p-2 bg-amber-700 hover:bg-amber-600 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-amber-100" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 bg-amber-700 hover:bg-amber-600 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-amber-100" />
              ) : (
                <Menu className="w-6 h-6 text-amber-100" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-amber-900 border-t border-amber-800">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'bg-amber-700 text-amber-100'
                    : 'text-amber-200 hover:bg-amber-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
