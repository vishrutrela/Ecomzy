import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem'; 

const Cart=()=>{
    const {cart}=  useSelector((state)=> state)
    const[totalamount,setTotalamount] = useState(0);

    useEffect(()=>{
        setTotalamount(cart.reduce((acc,curr)=> acc+curr.price ,0))
    },[cart])

    return(
        <div>
            {
                cart.length >0 ?
                (<div>
                    <div>
                        {
                            cart.map((item,index)=>{
                                return(
                                    <CartItem key={item.id} item={item} itemIndex={index}/>
                                )
                            })
                        }
                    </div>

                    <div>
                        <div>
                            <div>Your cart</div>
                            <div>Summary</div>
                            <div>
                                <span>total item :{cart.length}</span>
                            </div>
                        </div>
                        <div>
                            Total Amount : {`${totalamount}`}
                        </div>
                        <button>Check Out</button>
                    </div>


                </div>):(<div>
                    <p>Cart Empty</p>
                    <NavLink to="/">
                        shop Now
                    </NavLink>
                </div>)
            }


        </div>
    )

};
export default Cart