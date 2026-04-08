import { Produto } from '../types';

export const produtos: Produto[] = [
  {
    id: 'queijo-minas-artesanal',
    nome: 'Queijo Minas Artesanal',
    descricao: 'Queijo tradicional mineiro, curado por 22 dias, com sabor marcante e textura cremosa. Feito com leite fresco de vacas criadas no pasto.',
    preco: 45.90,
    imagem: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=800',
    categoria: 'queijos',
    produtorId: 'produtos-da-rocha',
    destaque: true
  },
  {
    id: 'mel-jatai-puro',
    nome: 'Mel de Jataí Puro',
    descricao: 'Mel orgânico produzido por abelhas nativas sem ferrão. Sabor suave e adocicado, rico em propriedades medicinais.',
    preco: 38.00,
    imagem: 'https://images.pexels.com/photos/5945806/pexels-photo-5945806.jpeg?auto=compress&cs=tinysrgb&w=800',
    categoria: 'mel',
    produtorId: 'apiario-jatai',
    destaque: true
  },
  {
    id: 'cafe-especial-montanha',
    nome: 'Café Especial da Montanha',
    descricao: 'Nossos cafés são 100% arábica, têm toraa média e mostram notas de caramelo, chocolate e um dulçor inigualável.',
    preco: 32.00,
    imagem: '/produtos/cafepacote.jpeg',
    categoria: 'cafe',
    produtorId: 'produtos-da-rocha',
    destaque: true
  },
  {
    id: 'geleia-frutas-vermelhas',
    nome: 'Geleia de Frutas Vermelhas',
    descricao: 'Geleia artesanal com morango, framboesa e amora. Sem conservantes artificiais, perfeita para acompanhar pães e queijos.',
    preco: 18.50,
    imagem: 'https://images.pexels.com/photos/7937473/pexels-photo-7937473.jpeg?auto=compress&cs=tinysrgb&w=800',
    categoria: 'geleias',
    produtorId: 'emporio-serra-verde',
    destaque: false
  },
  {
    id: 'cerveja-ipa-artesanal',
    nome: 'Cerveja IPA Artesanal',
    descricao: 'IPA com amargor equilibrado, notas cítricas e florais. Produzida em pequenos lotes com ingredientes selecionados.',
    preco: 15.90,
    imagem: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=800',
    categoria: 'cervejas',
    produtorId: 'cervejaria-alto-das-pedras',
    destaque: true
  },
  {
    id: 'doce-leite-tradicional',
    nome: 'Doce de Leite Tradicional - 420g',
    descricao: 'Nosso Doce de Leite é uma criação de familia, cozido em fogo brando, tendo apenas 8% de açucar, aroma de caramelo e textura aveludada.',
    preco: 25.00,
    imagem: '/produtos/potedoceleite.jpeg',
    categoria: 'doces',
    produtorId: 'produtos-da-rocha',
    destaque: true
  },
  {
    id: 'linguica-artesanal-calabresa',
    nome: 'Linguiça Artesanal Calabresa',
    descricao: 'Linguiça defumada com temperos selecionados. Carne suína de primeira qualidade, sem conservantes químicos.',
    preco: 28.90,
    imagem: 'https://images.pexels.com/photos/8477896/pexels-photo-8477896.jpeg?auto=compress&cs=tinysrgb&w=800',
    categoria: 'embutidos',
    produtorId: 'fazenda-boa-vista',
    destaque: false
  },
  {
    id: 'queijo-canastra',
    nome: 'Queijo Canastra',
    descricao: 'Queijo meia-cura da Serra da Canastra, com registro de Indicação Geográfica. Sabor forte e característico.',
    preco: 52.00,
    imagem: 'https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=800',
    categoria: 'queijos',
    produtorId: 'produtos-da-rocha',
    destaque: false
  },
  {
    id: 'cesta-artesanal-palha',
    nome: 'Cesta Artesanal de Palha',
    descricao: 'Cesta trançada à mão com palha natural. Peça única e sustentável, perfeita para decoração ou presentes.',
    preco: 65.00,
    imagem: 'https://images.pexels.com/photos/6045251/pexels-photo-6045251.jpeg?auto=compress&cs=tinysrgb&w=800',
    categoria: 'artesanato',
    produtorId: 'natora-artesanato',
    destaque: false
  },
  {
    id: 'geleia-pimenta',
    nome: 'Geleia de Pimenta',
    descricao: 'Combinação perfeita de doce e picante. Ideal para acompanhar queijos e carnes. Sabor único e marcante.',
    preco: 16.00,
    imagem: 'https://images.pexels.com/photos/5677900/pexels-photo-5677900.jpeg?auto=compress&cs=tinysrgb&w=800',
    categoria: 'geleias',
    produtorId: 'emporio-serra-verde',
    destaque: false
  },
  {
    id: 'propolis-verde',
    nome: 'Própolis Verde',
    descricao: 'Extrato de própolis verde, conhecido por suas propriedades antibacterianas e anti-inflamatórias naturais.',
    preco: 42.00,
    imagem: 'https://images.pexels.com/photos/6835093/pexels-photo-6835093.jpeg?auto=compress&cs=tinysrgb&w=800',
    categoria: 'mel',
    produtorId: 'apiario-jatai',
    destaque: false
  },
  {
    id: 'panetone-artesanal',
    nome: 'Panetone Artesanal',
    descricao: 'Panetone tradicional italiano feito à mão com frutas cristalizadas selecionadas e massa fermentada naturalmente.',
    preco: 55.00,
    imagem: 'https://images.pexels.com/photos/7937467/pexels-photo-7937467.jpeg?auto=compress&cs=tinysrgb&w=800',
    categoria: 'doces',
    produtorId: 'emporio-serra-verde',
    destaque: false
  },
  {
    id: 'cerveja-weiss',
    nome: 'Cerveja Weiss',
    descricao: 'Cerveja de trigo clara, refrescante, com notas de banana e cravo. Leve e aromática.',
    preco: 14.50,
    imagem: 'https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=800',
    categoria: 'cervejas',
    produtorId: 'cervejaria-alto-das-pedras',
    destaque: false
  },
  {
    id: 'salame-colonial',
    nome: 'Salame Colonial',
    descricao: 'Salame curado artesanalmente, com blend exclusivo de temperos. Textura firme e sabor intenso.',
    preco: 48.00,
    imagem: 'https://images.pexels.com/photos/8477918/pexels-photo-8477918.jpeg?auto=compress&cs=tinysrgb&w=800',
    categoria: 'embutidos',
    produtorId: 'fazenda-boa-vista',
    destaque: false
  },
  {
    id: 'toalha-mesa-bordada',
    nome: 'Toalha de Mesa Bordada',
    descricao: 'Toalha de mesa em linho com bordados à mão. Peça exclusiva que valoriza a tradição do bordado mineiro.',
    preco: 120.00,
    imagem: 'https://images.pexels.com/photos/6045203/pexels-photo-6045203.jpeg?auto=compress&cs=tinysrgb&w=800',
    categoria: 'artesanato',
    produtorId: 'natora-artesanato',
    destaque: false
  }
];
