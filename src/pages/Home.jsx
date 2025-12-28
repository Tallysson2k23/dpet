export default function Home() {
  return (
    <>
      {/* HERO / BANNER */}
      <section className="bg-black text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          DPE Roupas
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Estilo, atitude e conforto. Conheça nossa nova coleção.
        </p>
        <a
          href="/produtos"
          className="bg-white text-black px-8 py-3 font-semibold rounded"
        >
          Ver coleção
        </a>
      </section>

      {/* PRODUTOS EM DESTAQUE */}
      <section className="p-10">
        <h2 className="text-2xl font-bold text-center mb-8">
          Destaques
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Produto 1 */}
          <div className="border rounded p-4 text-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Camiseta DPE"
              className="mb-4"
            />
            <h3 className="font-semibold">Camiseta DPE</h3>
            <p className="text-gray-600">R$ 79,90</p>
            <button className="mt-4 bg-black text-white w-full py-2">
              Comprar
            </button>
          </div>

          {/* Produto 2 */}
          <div className="border rounded p-4 text-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Moletom DPE"
              className="mb-4"
            />
            <h3 className="font-semibold">Moletom DPE</h3>
            <p className="text-gray-600">R$ 149,90</p>
            <button className="mt-4 bg-black text-white w-full py-2">
              Comprar
            </button>
          </div>

          {/* Produto 3 */}
          <div className="border rounded p-4 text-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Boné DPE"
              className="mb-4"
            />
            <h3 className="font-semibold">Boné DPE</h3>
            <p className="text-gray-600">R$ 59,90</p>
            <button className="mt-4 bg-black text-white w-full py-2">
              Comprar
            </button>
          </div>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="bg-gray-100 text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Vista sua identidade
        </h2>
        <p className="text-gray-600 mb-6">
          Produtos de qualidade com o estilo DPE
        </p>
        <a
          href="/produtos"
          className="bg-black text-white px-8 py-3 rounded"
        >
          Comprar agora
        </a>
      </section>
    </>
  )
}
