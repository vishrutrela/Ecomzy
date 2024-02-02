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
    <div className='flex flex-col items-center justify-between
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl  shadow-md shadow-gray-300' >
        <div >
        <p className='font-semibold text-gray-700 text-lg text-left truncate w-40 mt-1  '>{post.title}</p>
        </div>
        <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        </div>
        <div className='h-[180px]'>
            <img className="h-full w-full" src={post.image} alt='' />
        </div>
        <div className='flex justify-between gap-12 items-center w-full mt-5'>
        <div>
            <p className='text-green-600 font-semibold '>${post.price}</p>
        </div>
        
       {
        cart.some((p)=> p.id === post.id) ?
        (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase  hover:bg-gray-700 transition duration-200 ease-in 
        hover:text-white ' onClick={removefromcart}>
            Remove item
        </button>):
        (<button 
            className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 transition duration-200 ease-in 
            hover:text-slate-50 'onClick={addtocart}>
            Add item
        </button>)
       }

        </div>
    </div>
  )
}

export default Product