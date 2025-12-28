export default function ProductCard() {
  return (
    <div className="border rounded p-4">
      <img
        src="https://via.placeholder.com/300"
        alt="Produto"
        className="mb-4"
      />
      <h3 className="font-bold">Camiseta DPE</h3>
      <p className="text-gray-600">R$ 79,90</p>
      <button className="mt-3 bg-black text-white px-4 py-2 w-full">
        Adicionar ao carrinho
      </button>
    </div>
  )
}
