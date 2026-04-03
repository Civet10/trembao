export interface Produtor {
  id: string;
  nome: string;
  foto: string;
  historia: string;
  instagram: string;
  tipo: string;
}

export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: string;
  produtorId: string;
  destaque: boolean;
}

export type Categoria =
  | 'queijos'
  | 'doces'
  | 'embutidos'
  | 'mel'
  | 'geleias'
  | 'cafe'
  | 'cervejas'
  | 'artesanato';

export interface CategoriaInfo {
  id: Categoria;
  nome: string;
  imagem: string;
  descricao: string;
}
