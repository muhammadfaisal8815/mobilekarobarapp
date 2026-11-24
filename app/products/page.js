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
  {
    name: "iPhone 14",
    price: "Rs. 195,000",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
  },
  {
    name: "Samsung Galaxy A54",
    price: "Rs. 95,000",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
  },
  {
    name: "OnePlus Smartphone",
    price: "Rs. 150,000",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
  },
];

export default function Products() {
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

      <section className="section">
        <h2>Our Mobile Collection</h2>

        <div className="products">
          {products.map((product) => (
            <div className="card" key={product.name}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <a
                className="btn"
                href={`https://wa.me/923001234567?text=${encodeURIComponent(
                  `Assalamualaikum, I want to buy ${product.name}`
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Order Now
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer>
        © 2026 Mobile Karobar. All Rights Reserved.
      </footer>
    </>
  );
}