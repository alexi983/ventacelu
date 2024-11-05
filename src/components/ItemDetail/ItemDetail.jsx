import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock.jsx';
import Loading from '../Loading/Loading.jsx';
import { useCart } from '../CartArgument/CartArgument.jsx'; 

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({product: 0, stock: 0});
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [successMessage, setSuccessMessage] = useState(''); 

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    const decrementQuantity = () => {
        if(quantity > 1){ 
            setQuantity(quantity - 1);
        }
    }

    const incrementQuantity = () => {
        if(quantity < product.stock){ 
            setQuantity(quantity + 1);
        }
    }

    const precioTotal = product.price * quantity;

    if (loading) {
        return <div className='container mx-auto max-w-[1170px]'><Loading /></div>;
    }
    if (!product) {
        return <div>Product not found</div>;
    }

    const { addItemToCart } = useCart();

    const handleAddToCart = () => {
        const productWithQuantity = { ...product, quantity }; 
        addItemToCart(productWithQuantity);
        setSuccessMessage(`¡${product.name} agregado al carrito!`); 
        setTimeout(() => {
            setSuccessMessage(''); 
        }, 3000);
    };

    return (
        <div className='container mx-auto max-w-[1170px]'>
            {successMessage && (
                <div className="bg-green-500 text-white p-3 rounded mb-4">
                    {successMessage}
                </div>
            )}
            <div className="grid grid-cols-2 pt-[50px] pb-[100px]">
                <div className="span-col-1 pr-[30px]">
                    <img src={product.img} alt="Imagen del producto" className='w-full rounded-[20px]' />
                </div>
                <div>
                    <h1 className='text-[45px] font-medium uppercase'>{product.name}</h1>
                    <p className='text-[20px] my-[20px]'>{product.description}</p>
                    <p className='text-[20px] my-[20px]'>Stock: {product.stock}</p>
                    <div className='flex'>
                        <button onClick={decrementQuantity} className='rounded-[5px] hover:bg-slate-600 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center'> - </button>
                        <p className='text-[20px] px-[10px]'>{quantity}</p>
                        <button onClick={incrementQuantity} className='rounded-[5px] hover:bg-slate-600 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center'> + </button>
                    </div>
                    <p className='text-[20px] my-[20px]'>Precio: ${product.price} por unidad</p>
                    <p className='text-[20px] my-[20px]'>Precio Total: ${precioTotal}</p>
                    <button onClick={handleAddToCart} className='bg-[#171e27] text-[#ffffff] text-[20px] px-[20px] py-[5px] hover:bg-[#172625]'>Agregar al Carro </button>
                </div>
            </div>
        </div>
    );
}
