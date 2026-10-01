import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingBag,
  Star,
} from "lucide-react";
import toast from "react-hot-toast";
import { products } from "../data/products";
import { useApp } from "../context/AppContext";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [imageIndex, setImageIndex] = useState(0);

  const {
    addToCart,
    toggleWishlist,
    isWishlisted,
  } = useApp();

  if (!product) {
    return (
      <div className="section text-center">
        <h1 className="text-3xl font-black">
          Product not found
        </h1>
      </div>
    );
  }

  const previousImage = () => {
    setImageIndex((current) =>
      current === 0
        ? product.images.length - 1
        : current - 1
    );
  };

  const nextImage = () => {
    setImageIndex(
      (current) => (current + 1) % product.images.length
    );
  };

  const handleCart = () => {
    addToCart(product);
    toast.success("Product added to cart");
  };

  const handleWishlist = () => {
    toggleWishlist(product);

    toast.success(
      isWishlisted(product.id)
        ? "Removed from wishlist"
        : "Added to wishlist"
    );
  };

  return (
    <main className="section">
      <div className="container-custom grid gap-12 lg:grid-cols-2">
        <div>
          <div className="relative overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-900">
            <img
              src={product.images[imageIndex]}
              alt={product.name}
              className="h-[500px] w-full object-cover"
            />

            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow dark:bg-gray-900"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow dark:bg-gray-900"
            >
              <ChevronRight />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            {product.images.map((image, index) => (
              <button
                key={image}
                onClick={() => setImageIndex(index)}
                className={`overflow-hidden rounded-xl border-2 ${
                  index === imageIndex
                    ? "border-primary"
                    : "border-transparent"
                }`}
              >
                <img
                  src={image}
                  alt=""
                  className="h-24 w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="font-bold uppercase tracking-widest text-primary">
            {product.category}
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            {product.name}
          </h1>

          <div className="mt-5 flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Star className="fill-yellow-400 text-yellow-400" />
              <span className="font-bold">{product.rating}</span>
            </div>

            <span className="text-gray-500">
              {product.reviews} reviews
            </span>
          </div>

          <p className="mt-6 leading-7 text-gray-600 dark:text-gray-400">
            {product.description}
          </p>

          <div className="mt-7">
            <span className="text-4xl font-black">
              ₹{product.price.toLocaleString()}
            </span>

            <span className="ml-3 text-lg text-gray-400 line-through">
              ₹{product.oldPrice.toLocaleString()}
            </span>
          </div>

          <div className="mt-8">
            <h3 className="font-bold">Features</h3>

            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-lg bg-gray-100 px-4 py-3 text-sm dark:bg-gray-900"
                >
                  ✓ {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              onClick={handleCart}
              className="btn-primary flex-1"
            >
              <ShoppingBag size={18} />
              Add to Cart
            </button>

            <button
              onClick={handleWishlist}
              className="icon-button h-12 w-12"
            >
              <Heart
                className={
                  isWishlisted(product.id)
                    ? "fill-red-500 text-red-500"
                    : ""
                }
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}