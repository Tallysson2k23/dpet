export default function Header() {
  return (
    <header className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">DPE Roupas</h1>
      <nav className="space-x-4">
        <a href="/">Home</a>
        <a href="/produtos">Produtos</a>
        <a href="/checkout">Carrinho</a>
      </nav>
    </header>
  )
}
