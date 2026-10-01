import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useApp } from "../context/AppContext";

export default function ProductCard({ product }) {
  const {
    addToCart,
    toggleWishlist,
    isWishlisted,
  } = useApp();

  const handleCart = () => {
    addToCart(product);
    toast.success("Added to cart");
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
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>

        <button
          onClick={handleWishlist}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow dark:bg-gray-900"
        >
          <Heart
            size={19}
            className={
              isWishlisted(product.id)
                ? "fill-red-500 text-red-500"
                : ""
            }
          />
        </button>

        <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
          -{Math.round(
            ((product.oldPrice - product.price) /
              product.oldPrice) *
              100
          )}
          %
        </span>
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          {product.category}
        </p>

        <Link to={`/products/${product.id}`}>
          <h3 className="mt-2 text-lg font-bold hover:text-primary">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center gap-1 text-sm">
            <Star
              size={15}
              className="fill-yellow-400 text-yellow-400"
            />
            {product.rating}
          </div>

          <span className="text-xs text-gray-500">
            ({product.reviews})
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold">
              ₹{product.price.toLocaleString()}
            </span>

            <span className="ml-2 text-sm text-gray-400 line-through">
              ₹{product.oldPrice.toLocaleString()}
            </span>
          </div>
        </div>

        <button
          onClick={handleCart}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 text-sm font-semibold text-white transition hover:bg-primary"
        >
          <ShoppingBag size={17} />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}