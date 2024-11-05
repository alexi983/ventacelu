import React from 'react';
import { useCart } from '../CartArgument/CartArgument';

const Cart = () => {
    const { cart, removeItemFromCart, clearCart, updateQuantity } = useCart();

    const handleBuy = () => {
        alert("Compra realizada exitosamente!");
        clearCart();
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold my-4">Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <div>
                    <ul className="space-y-4">
                        {cart.map(item => (
                            <li key={item.id} className="flex justify-between items-center p-4 border-b">
                                <div className="flex items-center">
                                    <img src={item.img} alt={item.name} className="w-20 h-20 object-cover mr-4" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{item.name}</h3>
                                        <p>${item.price.toFixed(2)} x {item.quantity}</p>
                                        <div className="flex items-center mt-2">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1, item.stock)}
                                                className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                                                disabled={item.quantity <= 1} 
                                            >
                                                -
                                            </button>
                                            <span className="mx-2">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1, item.stock)}
                                                className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                                                disabled={item.quantity >= item.stock} 
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeItemFromCart(item.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <h3 className="text-xl font-bold">Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
                        <button
                            onClick={handleBuy}
                            className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        >
                            Comprar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;









