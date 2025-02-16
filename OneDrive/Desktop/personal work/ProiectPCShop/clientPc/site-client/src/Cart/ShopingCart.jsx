import React, { useState, useEffect } from 'react';

function ShoppingCart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Obține produsele din sessionStorage
        const savedCart = JSON.parse(sessionStorage.getItem("shoppingCart")) || [];
        setCartItems(savedCart);
    }, []);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div>
            <h1>Coșul de cumpărături</h1>
            {cartItems.length === 0 ? (
                <p>Coșul este gol</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.model} - {item.nume} | {item.price} $ x {item.quantity}
                        </li>
                    ))}
                </ul>
            )}
            <h2>Total: {calculateTotal()} $</h2>
        </div>
    );
}

export default ShoppingCart;
