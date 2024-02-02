import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
    const { cart } = useSelector((state) => state)
    const [totalamount, setTotalamount] = useState(0);

    useEffect(() => {
        setTotalamount(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart])

    return (
        <div>
            {
                cart.length > 0 ?
                    (<div className='flex  justify-center '>
                        <div className='mx-10'>
                            {
                                cart.map((item, index) => {
                                    return (
                                        <CartItem key={item.id} item={item} itemIndex={index} />
                                    )
                                })
                            }
                        </div>

                        <div className=' flex flex-col justify-between mt-10 w-[350px] h-[500px] '>
                            <div className='ml-7'>
                                <div className='font-semibold'>YOUR CART</div>
                                <div className='text-2xl font-semibold text-green-500'>Summary</div>
                                <div>
                                    <span>Total Item :{cart.length}</span>
                                </div>
                            </div>
                            <div>
                                <div className='ml-7 '>
                                    Total Amount : ${`${totalamount}`}
                                </div>
                                <div className=' mb-5 bg-green-700 flex justify-center w-10/12 mx-auto rounded-md text-lg text-bold text-white'>
                                <button >Check Out</button>
                                </div>
                            </div>
                        </div>


                    </div>) : (<div className='flex flex-col  items-center'>
                        <p className='font-bold mb-4 mt-20'>Cart Empty</p>
                        <span className='bg-green-800 text-white rounded-md px-2 text-lg'><NavLink to="/">
                            shop Now
                        </NavLink></span>
                    </div>)
            }


        </div>
    )

};
export default Cart