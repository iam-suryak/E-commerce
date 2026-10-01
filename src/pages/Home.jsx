import { motion } from "framer-motion";
import {
  ArrowRight,
  Headphones,
  Speaker,
  Watch,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="overflow-hidden bg-gray-100 dark:bg-gray-900">
        <div className="container-custom grid min-h-[650px] items-center gap-10 py-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 font-bold uppercase tracking-[0.25em] text-primary">
              Future in your hands
            </p>

            <h1 className="max-w-3xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Technology
              <br />
              made <span className="text-primary">simple.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600 dark:text-gray-400">
              Discover smart watches, immersive audio and
              innovative gadgets built for your everyday life.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary">
                Shop Products
                <ArrowRight size={18} />
              </Link>

              <Link to="/about" className="btn-secondary">
                Explore NEXORA
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-10 rounded-full bg-primary/20 blur-3xl" />

            <img
              src={products[0].images[0]}
              alt="Nexora Watch"
              className="relative mx-auto h-[420px] w-full max-w-[500px] rounded-[3rem] object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container-custom">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Explore
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Shop by category
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Smart Watches",
                icon: Watch,
                image: products[0].images[0],
              },
              {
                name: "Earbuds",
                icon: Zap,
                image: products[1].images[0],
              },
              {
                name: "Headphones",
                icon: Headphones,
                image: products[2].images[0],
              },
              {
                name: "Speakers",
                icon: Speaker,
                image: products[3].images[0],
              },
            ].map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.name}
                  to="/products"
                  className="group relative h-64 overflow-hidden rounded-2xl"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/50" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <Icon size={35} />

                    <h3 className="mt-4 text-xl font-bold">
                      {category.name}
                    </h3>

                    <span className="mt-2 text-sm">
                      Explore →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section bg-gray-50 dark:bg-gray-900/50">
        <div className="container-custom">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                Trending
              </p>

              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                Popular products
              </h2>
            </div>

            <Link
              to="/products"
              className="hidden font-semibold text-primary sm:block"
            >
              View all →
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="section">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-3xl bg-black px-7 py-14 text-white sm:px-12 lg:px-20">
            <div className="relative z-10 max-w-xl">
              <p className="font-bold uppercase tracking-widest text-primary">
                New generation
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Sound that moves with you.
              </h2>

              <p className="mt-5 text-gray-400">
                Experience powerful audio with the new Nexora
                Buds Max.
              </p>

              <Link
                to="/products/6"
                className="mt-7 inline-flex rounded-full bg-white px-6 py-3 font-bold text-black transition hover:bg-primary hover:text-white"
              >
                Discover now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}