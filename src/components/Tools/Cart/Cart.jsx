import React from 'react';

const Cart = ({ carts, setCarts }) => {

    return (
        <div className='max-w-[1120px] mx-auto w-10/12 mx-auto mb-10 border p-4 border-[#F2F2F2] rounded-2xl'>
            <h2 className='text-2xl font-bold mb-3'>Your Cart</h2>
            {carts.map((cart) =>
                <div className='max-w-[1120px] mx-auto flex justify-between border p-3 mb-5 items-center rounded-lg border-[#F2F2F2]'>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img className='w-8 h-8 ring-2 ring-gray-300 ring-offset-7 rounded-full' src={cart.image} alt="" />
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold'>{cart.name}</h4>
                            <p className='text-[#627382]'>$ {cart.price}</p>
                        </div>
                    </div>

                    <div>
                        <a className='text-[#FF3980] font-bold cursor-pointer'>Remove</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;