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
    toast.success("Item is removed");
  };

  return (
    <div>
      <div>
        <div>
          <img src={item.image} alt="" />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h2>{item.description}</h2>
        </div>
        <div>
          <p>{item.price}</p>
          <div onClick={removefromcart}>
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
