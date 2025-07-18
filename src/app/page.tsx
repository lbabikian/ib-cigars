import Link from 'next/link'; /* for browse button */
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-deepCharcoal gap-6">
      <div className="mt-8">
        <Image
          src="/logo-transparent.png"
          alt="IB Cigars Logo"
          width={350}
          height={350}
          className="mx-auto"
          priority
        />
      </div>

      <h1 className="text-6xl md:text-6xl font-serif text-richGold mb-4 drop-shadow-[0_2px_2px_rgba(200,146,44,0.8)]">
        IB Cigars
      </h1>

      <p className="italic text-lg md:text-xl text-ivoryCream mb-6 max-w-xl text-center drop-shadow-[0_1px_1px_rgba(200,146,44,0.6)]">
        Luxury cigars for the refined palate.
      </p>

    <Link
  href="/products"
  className="rounded bg-richGold px-6 py-3 font-semibold text-pureWhite transform transition duration-300 hover:scale-105 shadow-md hover:shadow-lg hover:bg-[#d9a441]"> 
        Browse products
      </Link>
    </main>
  );
}