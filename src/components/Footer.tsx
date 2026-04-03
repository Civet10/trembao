import { Instagram, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-amber-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-100">trembaomg</h3>
            <p className="text-amber-200 text-sm leading-relaxed">
              Conectando você aos melhores produtos artesanais de Minas Gerais,
              direto da agricultura familiar para sua mesa.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-amber-100">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-amber-200 hover:text-amber-100 transition-colors">Início</a></li>
              <li><a href="#" className="text-amber-200 hover:text-amber-100 transition-colors">Categorias</a></li>
              <li><a href="#" className="text-amber-200 hover:text-amber-100 transition-colors">Produtores</a></li>
              <li><a href="#" className="text-amber-200 hover:text-amber-100 transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-amber-100">Categorias</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-amber-200 hover:text-amber-100 transition-colors">Queijos</a></li>
              <li><a href="#" className="text-amber-200 hover:text-amber-100 transition-colors">Doces</a></li>
              <li><a href="#" className="text-amber-200 hover:text-amber-100 transition-colors">Mel</a></li>
              <li><a href="#" className="text-amber-200 hover:text-amber-100 transition-colors">Café</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-amber-100">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center text-amber-200">
                <MapPin className="w-4 h-4 mr-2" />
                Minas Gerais, Brasil
              </li>
              <li className="flex items-center text-amber-200">
                <Mail className="w-4 h-4 mr-2" />
                contato@trembaomg.com.br
              </li>
              <li className="flex items-center text-amber-200">
                <Instagram className="w-4 h-4 mr-2" />
                @trembaomg
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-amber-300">
            <p className="flex items-center mb-2 md:mb-0">
              Feito com <Heart className="w-4 h-4 mx-1 text-red-500" /> em Minas Gerais
            </p>
            <p>&copy; 2024 trembaomg.com.br - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
