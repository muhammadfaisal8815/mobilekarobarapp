import Link from "next/link";

export default function Contact() {
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
        <h2>Contact Mobile Karobar</h2>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <h3>Get In Touch</h3>
          <br />

          <p>📍 Karachi, Pakistan</p>
          <br />

          <p>📞 +92 300 1234567</p>
          <br />

          <p>✉️ mobilekarobar@gmail.com</p>
          <br />

          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <footer>
        © 2026 Mobile Karobar. All Rights Reserved.
      </footer>
    </>
  );
}