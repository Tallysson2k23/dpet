import ProductCard from "../components/ProductCard"

export default function Products() {
  return (
    <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  )
}
