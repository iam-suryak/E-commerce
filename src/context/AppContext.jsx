import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function AppProvider({children}){
    const [cart, setCart] = useState(()=> {
        try {
            return JSON.parse(localStorage.getItem("nexora-cart")) || [];
        } catch {
            return [];
        }
    });

    const [wishlist, setWishlist] = useState(()=> {
        try {
            return JSON.parse(localStorage.getItem("nexora-wishlist")) || [];
        } catch {
            return [];
        }
    });


    useEffect(() => {
        localStorage.setItem("nexora-cart",JSON.stringify(cart));
    },[cart]);

    useEffect(() => {
        localStorage.setItem("nexora-wishlist",JSON.stringify(wishlist));
    },[wishlist]);

    const addToCart = (product) => {
        setCart((previous) => {
            const existing = previous.find((item) => item.id === product.id);
            
            if (existing) {
                return previous.map((item) => 
                  item.id === product.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
                );
            }

            return [...previous, {...product,quantity: 1 }];
        });
    };


    const removeFromCart = (id) => {
        setCart((previous)=> previous.filter((item)=> item.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        if (quantity < 1) return;

        setCart((previous) =>
            previous.map((item)=>
                item.id === id? {...item, quantity} : item
            )
        );
    };

    const toggleWishlist = (product) => {
        setWishlist((previous) => {
            const exists = previous.some((item) => item.id === product.id);

            if (exists) {
                return previous.filter((item) => item.id !== product.id);
            }

            return [...previous, product];
        });
    };

    const isWishlisted = (id) => {
        return wishlist.some((item) => item.id === id);
    };

    const cartCount = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const cartTotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );


    return(
        <AppContext.Provider 
           value={{
                cart,
                wishlist,
                cartCount,
                cartTotal,
                addToCart,
                removeFromCart,
                updateQuantity,
                toggleWishlist,
                isWishlisted,
            }}
        >
         {children}
            
        </AppContext.Provider>
    );
}

export const useApp = () => useContext(AppContext);