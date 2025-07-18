import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-deepCharcoal text-richGold">
      <Image
        src="/logo-transparent.png"
        alt="IB Cigars Logo"
        width={250}
        height={250}
        className="mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
        priority
      />
      <h1 className="text-5xl font-serif font-bold mb-4">IB Cigars</h1>
      <p className="text-lg text-ivoryCream mb-6">Luxury cigars for the refined palate.</p>
      <Link
        href="#"
        className="bg-richGold text-deepCharcoal px-6 py-2 rounded hover:bg-warmBrown transition"
      >
        Browse products
      </Link>
    </section>
  );
}