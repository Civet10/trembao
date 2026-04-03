import { Heart, Users, Leaf, Award } from 'lucide-react';

export default function SobrePage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div
        className="relative h-96 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        <div className="relative h-full container mx-auto px-4 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-6xl font-bold mb-6">Sobre o trembaomg</h1>
            <p className="text-2xl text-gray-200 leading-relaxed">
              Conectando a autenticidade da agricultura familiar mineira
              com pessoas que valorizam qualidade e tradição
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              O trembaomg nasceu do desejo de valorizar e divulgar os produtos artesanais
              de Minas Gerais, especialmente aqueles oriundos da agricultura familiar.
              Acreditamos que cada produto carrega uma história, uma tradição e o amor
              de quem dedica sua vida a produzir com qualidade.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Nosso objetivo é criar uma ponte entre os produtores rurais e consumidores
              que buscam produtos naturais, autênticos e de alta qualidade. Queremos
              que cada compra seja uma experiência que conecte você às raízes mineiras
              e apoie famílias que mantêm vivas as tradições de nossa terra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-amber-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Produtos com Alma</h3>
              <p className="text-gray-700 leading-relaxed">
                Cada produto é feito com dedicação e carinho, seguindo receitas
                tradicionais e métodos artesanais que preservam o sabor autêntico
                de Minas Gerais.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Agricultura Familiar</h3>
              <p className="text-gray-700 leading-relaxed">
                Apoiamos pequenos produtores e suas famílias, valorizando o trabalho
                rural e contribuindo para o desenvolvimento sustentável de comunidades
                mineiras.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Natural</h3>
              <p className="text-gray-700 leading-relaxed">
                Priorizamos produtos sem conservantes artificiais, feitos com
                ingredientes naturais e processos que respeitam a natureza e
                a saúde dos consumidores.
              </p>
            </div>

            <div className="bg-amber-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Qualidade Certificada</h3>
              <p className="text-gray-700 leading-relaxed">
                Trabalhamos apenas com produtores comprometidos com a qualidade,
                seguindo normas sanitárias e boas práticas de fabricação artesanal.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Por que trembaomg?</h2>
            <p className="text-xl leading-relaxed mb-6">
              "Trem bão" é uma expressão mineira que significa "coisa boa".
              E é exatamente isso que oferecemos: produtos bons, de verdade,
              feitos com amor e tradição em Minas Gerais.
            </p>
            <p className="text-lg text-amber-100">
              Cada produto que você leva para casa é um pedaço da nossa terra,
              da nossa cultura e do trabalho honesto de famílias mineiras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
