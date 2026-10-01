import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white">
            <div className="container-custom grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <h2 className="text-2xl font-black">
                        NEXORA <span className="text-primary">.</span>
                    </h2>

                    <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
                        Smart technology designed for modern lifestyles.
                        Experience better sound, smarter living and everyday innovation.
                    </p>

                    <div className="mt-6 flex gap-3">
                        <a href="#" className="social-icon" aria-label="Instagram">
                            <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>

                        <a href="#" className="social-icon" aria-label="Facebook">
                            <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.415V8z"/></svg>
                        </a>

                        <a href="#" className="social-icon" aria-label="Twitter">
                            <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                        </a>

                        <a href="#" className="social-icon" aria-label="Youtube">
                            <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold">Shop</h3>

                    <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
                        <Link to="/products">Smart Watches</Link>
                        <Link to="/products">Earbuds</Link>
                        <Link to="/products">Headphones</Link>
                        <Link to="/products">Speakers</Link>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold">Company</h3>

                    <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold">Newsletter</h3>

                    <p className="mt-4 text-sm text-gray-400">
                        Get updates about new products and offers.
                    </p>

                    <div className="mt-4 flex">
                        <input 
                            type="email"
                            placeholder="Your email"
                            className="w-full rounded-l-lg bg-gray-800 px-4 py-3 text-sm outline-none" 
                        />

                        <button className="rounded-r-lg bg-primary px-4 font-semibold">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-500">
                © 2026 NEXORA. All rights reserved.
            </div>
        </footer>
    );
}