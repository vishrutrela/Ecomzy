import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removefromcart = () => {
    console.log("Removing item with ID:", item.id); // Add this line for debugging
    dispatch(remove(item.id));
    toast.error("Item is removed");
  };

  return (
    <div>
      <div className='flex w-[600px]  mt-10'>
        <div className='w-[160px]'>
          <img className="w-full h-full " src={item.image} alt="" />
        </div>
        <div>
          <div className='flex flex-col justify-between'>
            <div className='ml-5'>
              <h1 className='text-gray-700 font-semibold'>{item.title}</h1>
              <h2>{item.description.split(" ").slice(0, 13).join(" ") + "..."}</h2>
            </div>
            <div className=' ml-5 flex justify-between mt-7'>
              <p className='text-green-600'>${item.price}</p>
              <div className='bg-red-300  p-3 rounded-full text-white
               hover:cursor-pointer hover:bg-red-400' onClick={removefromcart}>
                <MdDelete />
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='border border-gray-700 mt-4'></div>
    </div>
  );
};

export default CartItem;
