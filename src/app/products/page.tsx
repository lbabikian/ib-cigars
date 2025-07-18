import Image from 'next/image';
const products = [
  {
    id: 1,
    name: 'Toro Habano',
    size: '6x52',
    price: '$',
    img: '/sample1.jpg',
  },
  {
    id: 2,
    name: 'Robusto Maduro',
    size: '5x52',
    price: '$',
    img: '/sample2.jpg',
  },
  {
    id: 3,
    name: 'Churchill Gold',
    size: '7x52',
    price: '$',
    img: '/sample3.jpg',
  },
  {
    id: 4,
    name: 'Gordo Especial',
    size: '6x60',
    price: '$',
    img: '/sample4.jpg',
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-deepCharcoal text-pureWhite px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-richGold mb-10 drop-shadow"> 
        Featured Products
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow
                       hover:shadow-lg transition">
            <Image
              src={p.img}
              alt={p.name}
              width={400}
              height={250}
              className="h-48 w-full object-cover"
            />

            <div className="p-4 text-center">
              <h2 className="font-serif text-xl text-richGold mb-2 drop-shadow">
                {p.name}
              </h2>
              <p className="text-ivoryCream">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}