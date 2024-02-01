import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add ,remove} from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

const Product = ({post}) => {
    const {cart}=useSelector((state)=>state)
    const dispatch = useDispatch();

    const addtocart= ()=>{
        
        dispatch(add(post));
        toast.success("item added")
    }
    const removefromcart =()=>{
        dispatch(remove(post.id))
        toast.error("item removed")
    }
  return (
    <div className='flex flex-col' >
        <div >
        <p className='font-bold'>{post.title}</p>
        </div>
        <div>
        <p>{post.description}</p>
        </div>
        <div>
            <p>{post.price}</p>
        </div>
        <div>
            <p>{post.category}</p>
        </div>
        <div>
            <img src={post.image} alt='' />
        </div>
       {
        cart.some((p)=> p.id === post.id) ?
        (<button onClick={removefromcart}>
            Remove item
        </button>):
        (<button onClick={addtocart}>
            Add item
        </button>)
       }

    </div>
  )
}

export default Product