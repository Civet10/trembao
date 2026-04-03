import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';
import HomePage from './pages/HomePage';
import CategoriasPage from './pages/CategoriasPage';
import ProdutosPage from './pages/ProdutosPage';
import ProdutoresPage from './pages/ProdutoresPage';
import SobrePage from './pages/SobrePage';
import CarrinhoPage from './pages/CarrinhoPage';
import { Produto } from './types';

interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [selectedProduct, setSelectedProduct] = useState<Produto | null>(null);
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = getPageTitle();
  }, [currentPage]);

  const getPageTitle = () => {
    switch (currentPage) {
      case 'home':
        return 'trembaomg - Sabor de Minas';
      case 'categorias':
        return 'Categorias - trembaomg';
      case 'produtos':
        return 'Produtos - trembaomg';
      case 'produtores':
        return 'Produtores - trembaomg';
      case 'sobre':
        return 'Sobre - trembaomg';
      case 'carrinho':
        return 'Carrinho - trembaomg';
      default:
        return 'trembaomg';
    }
  };

  const handleNavigate = (page: string, categoryId?: string) => {
    setCurrentPage(page);
    if (categoryId) {
      setSelectedCategory(categoryId);
    } else if (page !== 'produtos') {
      setSelectedCategory(undefined);
    }
  };

  const handleProductClick = (produto: Produto) => {
    setSelectedProduct(produto);
  };

  const handleAddToCart = (produto: Produto) => {
    setCarrinho(prev => {
      const existingItem = prev.find(item => item.produto.id === produto.id);
      if (existingItem) {
        return prev.map(item =>
          item.produto.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...prev, { produto, quantidade: 1 }];
    });
  };

  const handleRemoveFromCart = (produtoId: string) => {
    setCarrinho(prev => prev.filter(item => item.produto.id !== produtoId));
  };

  const handleUpdateQuantity = (produtoId: string, quantidade: number) => {
    setCarrinho(prev =>
      prev.map(item =>
        item.produto.id === produtoId ? { ...item, quantidade } : item
      )
    );
  };

  const cartCount = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onProductClick={handleProductClick}
            onNavigate={handleNavigate}
          />
        );
      case 'categorias':
        return <CategoriasPage onNavigate={handleNavigate} />;
      case 'produtos':
        return (
          <ProdutosPage
            categoriaId={selectedCategory}
            onProductClick={handleProductClick}
            onNavigate={handleNavigate}
          />
        );
      case 'produtores':
        return <ProdutoresPage onProductClick={handleProductClick} />;
      case 'sobre':
        return <SobrePage />;
      case 'carrinho':
        return (
          <CarrinhoPage
            itens={carrinho}
            onRemoveItem={handleRemoveFromCart}
            onUpdateQuantity={handleUpdateQuantity}
            onNavigate={handleNavigate}
          />
        );
      default:
        return (
          <HomePage
            onProductClick={handleProductClick}
            onNavigate={handleNavigate}
          />
        );
    }
  };

  const parallaxOffset = scrollY * 0.5;

  return (
    <div className="min-h-screen bg-white">
      <div
        className="fixed inset-0 pointer-events-none opacity-10 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />

      <div className="relative z-10">
        <Header
          currentPage={currentPage}
          onNavigate={handleNavigate}
          cartCount={cartCount}
        />

        <main>{renderPage()}</main>

        <Footer />
      </div>

      {selectedProduct && (
        <Modal
          produto={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}

export default App;
