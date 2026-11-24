import Link from "next/link";

const products = [
  {
    name: "iPhone 15 Pro",
    price: "Rs. 285,000",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
  },
  {
    name: "Samsung Galaxy S24",
    price: "Rs. 220,000",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
  },
  {
    name: "Google Pixel 8",
    price: "Rs. 175,000",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
  },
];

export default function Home() {
  return (
    <>
      <header>
        <div className="logo">Mobile Karobar</div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="hero">
        <div>
          <h1>Find Your Perfect Smartphone</h1>
          <p>
            Latest smartphones, affordable prices and trusted quality.
            Your mobile shopping destination in Pakistan.
          </p>
          <Link href="/products" className="btn">
            Shop Now
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
          alt="Smartphone"
        />
      </section>

      <section className="section">
        <h2>Featured Products</h2>
        <div className="products">
          {products.map((product) => (
            <div className="card" key={product.name}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <Link href="/products" className="btn">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <h2>Looking for a New Mobile?</h2>
        <p>Explore our latest mobile collection today.</p>
        <br />
        <Link href="/contact" className="btn">
          Contact Us
        </Link>
      </section>

      <footer>
        © 2026 Mobile Karobar. All Rights Reserved.
      </footer>
    </>
  );
}